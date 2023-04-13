import cookieParser from 'cookie-parser';
import express, {
  ErrorRequestHandler,
  Request,
  RequestHandler,
  Response,
} from 'express';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static('./public'));
app.use(cookieParser());
app.use(
  session({
    secret: 'SECRET',
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// 미들웨어는 RequestHandler 타입이다.
app.get('/', (res, req) => {});

const middleWare: RequestHandler<
  { paramType: string },
  { message: string },
  { bodyType: number },
  { queryType: boolean },
  { localType: unknown }
> = (req, res, next) => {
  req.body.bodyType;
  req.params.paramType;
  req.query.queryType;
  res.locals.localType;
  res.json({
    message: 'Hello',
  });
  res.eun;
  req.eun;

  req.session;
  req.user;
  req.user?.eun;

  req.flash('플래시 메시지');
};

const errorMiddleWare: ErrorRequestHandler = (err: Error, req, res, next) => {
  console.log(err.status);
};

app.use(errorMiddleWare);

app.listen(8080, () => {});
