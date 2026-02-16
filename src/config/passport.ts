import type { PassportStatic } from 'passport';
import {
  Strategy,
  ExtractJwt,
  type StrategyOptionsWithSecret,
  type VerifyCallback,
} from 'passport-jwt';
import { getUserById, type AuthJwtPayload } from '../services/auth.service';

function initialize(passport: PassportStatic) {
  const opt: StrategyOptionsWithSecret & {
    passReqToCallback?: false;
  } = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string,
    algorithms: ['HS256'],
  };

  const verify: VerifyCallback = async (
    payload: Partial<AuthJwtPayload>,
    done,
  ) => {
    try {
      // We accept either `sub` or `user_id` to stay resilient to token format changes.
      const userId = payload.sub ?? payload.user_id;

      if (!userId) {
        return done(null, false);
      }

      const user = await getUserById(userId);

      if (user === null) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  };

  passport.use(new Strategy(opt, verify));
}

export default initialize;
