'use strict';

const pagination = require('hexo-pagination');
const { sort } = require('timsort');

module.exports = function(locals) {
  const config = this.config;
  const posts = locals.posts.sort(config.index_generator.order_by);
  const temp_posts = [];

  sort(posts.data, (a, b) => (b.sticky || 0) - (a.sticky || 0));

  const paginationDir = config.pagination_dir || 'page';
  const path = config.index_generator.path || '';

  if(config.index_generator.exclude){    
    posts.forEach(element => {
      var mark=true; 
      element.categories.forEach(function(categories){ 
        config.index_generator.exclude_list.forEach(function(category){
          if(categories.name == category){
            mark=false; 
          }
        });
      }); 
      if(mark){
        temp_posts.push(element);
      }    
    });
  }

  return pagination(path, config.index_generator.exclude ? temp_posts : posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};