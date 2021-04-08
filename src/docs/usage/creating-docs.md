---
title: Creating docs
description: Learn how to create docs using Rocket Docs.
---

All md files created inside your docs folder will become pages, with the path defined by the filename.
Inside all docs files, you can define the following options:

| Key                    | Required | Description                |
| ---------------------- | -------- | -------------------------- |
| title                  | Yes      | No                         |
| description            | No       | Page description           |
| image                  | No       | Used for og:image          |
| disableTableOfContents | No       | Disables Table Of Contents |

## Example

```md
---
title: 'My Example'
description: 'A simple description for this page'
image: /banner.jpeg
disableTableOfContents: false
---

Wow, this is a nice page
```

## Embeding files

In a documentation website, sometimes you will need to embed well known services (like CodeSandbox, Twitter, or others...). If you need to
do it, you can simply copy-paste the link (powered by the awesome [gatsby-remark-embeder](https://www.gatsbyjs.org/packages/gatsby-remark-embedder/)).
Make sure to check the [supported services](https://github.com/MichaelDeBoey/gatsby-remark-embedder#supported-services).

https://youtu.be/QfcozcbDhNM

## Code Highlight

We support many options for code components.

### Line numbers

To add line numbers for that code block, pass an option `lineNumbers=true`.

```C lineNumbers=true
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}
```

### Highlight lines

To highlight lines, you can pass ranges to a `highlight` option.
For example `highlight={1-4,6-7,9}` on the code below would result in:

```html highlight={1-4,6-7,9}
<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <p>What's up world?</p>
</body>
</html>
```
