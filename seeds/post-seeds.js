const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum elit sed lacus euismod bibendum. Sed ac egestas nibh. Quisque vitae pharetra tortor. Phasellus quis leo eget lectus maximus porta at sit amet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel massa id neque suscipit sollicitudin.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum elit sed lacus euismod bibendum. Sed ac egestas nibh. Quisque vitae pharetra tortor. Phasellus quis leo eget lectus maximus porta at sit amet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel massa id neque suscipit sollicitudin.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum elit sed lacus euismod bibendum. Sed ac egestas nibh. Quisque vitae pharetra tortor. Phasellus quis leo eget lectus maximus porta at sit amet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel massa id neque suscipit sollicitudin.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum elit sed lacus euismod bibendum. Sed ac egestas nibh. Quisque vitae pharetra tortor. Phasellus quis leo eget lectus maximus porta at sit amet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel massa id neque suscipit sollicitudin.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum elit sed lacus euismod bibendum. Sed ac egestas nibh. Quisque vitae pharetra tortor. Phasellus quis leo eget lectus maximus porta at sit amet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel massa id neque suscipit sollicitudin.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;