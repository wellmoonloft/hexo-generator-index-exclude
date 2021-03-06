# hexo-generator-index-exclude

Fork from hexo-generator-index

Only the exclusion logic has been added, and nothing else has changed. I chose to upload to use automatic deployment

Index generator for [Hexo].

It generates an archive of posts on your homepage, according to the `index` or `archive` layout of your theme.

## Installation

``` bash
$ npm uninstall hexo-generator-index
$ npm install hexo-generator-index-exclude --save
```

## Options

Add or modify the following section to your root _config.yml file

``` yaml
index_generator:
  path: ''
  per_page: 10
  order_by: -date
  pagination_dir: page
  exclude: false
  exclude_list:
    - novel
    - gossip  
```

- **path**: Root path for your blog's index page. 
  - default: ""
- **per_page**: Posts displayed per page.
  - default: [`config.per_page`](https://hexo.io/docs/configuration.html#Pagination) as specified in the official Hexo docs (if present), otherwise `10`
  - `0` disables pagination
- **order_by**: Posts order. 
  - default: date descending
- **pagination_dir**: URL format.
  - default: 'page'
  - `awesome-page` makes the URL ends with 'awesome-page/<page number>' for second page and beyond.

## Usage

The `sticky` parameter in the post [Front-matter](https://hexo.io/docs/front-matter) will be used to pin the post to the top of the index page. Higher `sticky` means that it will be ranked first.

```yml
---
title: Hello World
date: 2013/7/13 20:46:25
sticky: 100
---
```

## Note

If your theme define a non-archive `index` layout (e.g. About Me page), this plugin would follow that layout instead and not generate an archive. In that case, use [hexo-generator-archive](https://github.com/hexojs/hexo-generator-archive) to generate an archive according to the `archive` layout.

## License

MIT

[Hexo]: http://hexo.io/
