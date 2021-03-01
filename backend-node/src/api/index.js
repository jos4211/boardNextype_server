import Router from 'koa-router';
import boards from './board';

const api = new Router();

api.use('/board', boards.routes());
// 라우터를 내보냅니다.
export default api;
