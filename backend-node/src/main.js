require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

import https from 'https';

import api from './api';
import { create } from 'domain';

// 비구조화 할당을 통하여 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT } = process.env;

mongoose
  .connect(
    'mongodb+srv://jos:' +
      encodeURIComponent('1234') +
      '@oksang.lxrnk.mongodb.net/board',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();
const cors = require('@koa/cors');

// koa CORS 문제 해결
app.use(cors());

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용
//router.use('/', socketTable.routes());
// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// PORT 가 지정되어있지 않다면 4000 을 사용
const port = PORT || 4000;
// import Table from './models/table';
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
