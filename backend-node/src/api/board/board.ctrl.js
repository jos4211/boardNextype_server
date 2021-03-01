import Joi from 'joi';
import Boards from '../../models/board';

// 게시물 리스트 뽑아오기
export const boardList = async (ctx) => {
  console.log('ddddddddddd');

  const board = await Boards.findByAllPost();

  console.log('board', board.length);

  try {
    ctx.body = board;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 게시물 추가
export const addContent = async (ctx) => {
  // 한국 현재시간 가져오기
  let moment = require('moment');
  require('moment-timezone');

  moment.tz.setDefault('Asia/Seoul');

  const { title, writer, content } = ctx.request.body;

  const board = await Boards.findByAllPost();

  const createdDate = moment().format('YYYY-MM-DD HH:mm');

  try {
    const post = new Boards({
      title,
      writer,
      content,
      createdDate,
    });

    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 게시물 보기
export const viewContent = async (ctx) => {
  const { postId } = ctx.query;

  const post = await Boards.findByPostId(postId);

  let moment = require('moment');
  require('moment-timezone');

  moment.tz.setDefault('Asia/Seoul');

  console.log(moment().format('YYYY-MM-DD HH:mm'));

  try {
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
