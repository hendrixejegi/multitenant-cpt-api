import type { PassportStatic } from 'passport';
import {
  Strategy,
  ExtractJwt,
  type StrategyOptionsWithSecret,
  type VerifyCallback,
} from 'passport-jwt';
import { getUserById } from '../services/auth.service';

function initialize(passport: PassportStatic) {
  const opt: StrategyOptionsWithSecret & {
    passReqToCallback?: false;
  } = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string,
    algorithms: ['HS256'],
  };

  const verify: VerifyCallback = async (payload: { sub: string }, done) => {
    try {
      const user = await getUserById(payload.sub);

      if (user === null) {
        done(null, false);
      }

      done(null, user);
    } catch (error) {
      done(error, null);
    }
  };

  passport.use(new Strategy(opt, verify));
}

export default initialize;
