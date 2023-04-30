import * as process from 'process';

export const jwtConstants = {
  secret: process.env.SEKRET_KEY,
  expiresIn: process.env.EXPRES_IN,
};
