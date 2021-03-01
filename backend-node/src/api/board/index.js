import Router from 'koa-router';
import * as boardCtrl from './board.ctrl';

const boards = new Router();

boards.get('/boardList', boardCtrl.boardList);
boards.get('/viewContent', boardCtrl.viewContent);
boards.post('/addContent', boardCtrl.addContent);
// boards.post('/delContent', boardCtrl.delContent);
// boards.post('/updateContent', boardCtrl.updateContent);

export default boards;
