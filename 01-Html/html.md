# HTML

## 1. WHAT IS HTML?

- HTML stands for Hyper Text Markup Language.
- HTML describes the structure of web pages using markup.
- HTML is used to provide the content(words, images, audio, video, and so on) to the web pages.
- HTML is a tag based language. They are defined within the angle brackets.
- HTML file can be created using a text editor.

> Sample HTML code :- \<!DOCTYPE html>

## 2. COMMENTS IN HTML

The comment tag \<!--...--> is used to insert comments in the source code. Comments are not displayed in the browsers.  
You can use comments to explain your code, which can help you when you edit the source code at a later date. This is especially useful if you have a lot of code.

## 3. TAGS

Tags define all elements of the document, i.e. they give meaning to the plain text of HTML.

- HTML tags are surrounded by the two characters < and > (They are called angle brackets).
- The tag name can either start from an alphabet or an underscore(\_).
- The text between the start and end tags is the element content.
- Tags with an opening and closing can have any number of tags within itself.
- HTML tags are **not case sensitive**, \<p> means the same as \<P>.
- HTML tags normally **comes in pairs(container tags)**, i.e. both opening and closing(it is same, just the name of the tag with character '/ ' in the beginning) tag.
- Eg: **\<html> and \</html>** is a tag that comes in pair.
- Eg: **\<br>** does not have a closing tag.

### 3.1 Description of tags used till now

- **\<!DOCTYPE html>** tells the browser that the file being displayed is HTML5 page.
- **\<html> \</html>** meant to contain all the html data and is the start of an HTML document.
- **\<head> \</head>** provides information about the document. It is not displayed in the browser window.
- **\<title> \</title>** provides a title for the document.
- **\<body> \</body>** contains all the things visible on the web page.

> NOTE: You might come across "self-closing" tags, whereby a br tag, for eg., will look like "\<br/>" instead of simply "\<br>".

## 4. DOCTYPE

The DOCTYPE declaration describes what version of HTML the page is written in. It is the very first thing in your HTML document that you see in every web page. It is written at the top of every page before the \<html> tag.  
The doctype declaration is not an HTML tag. It is the one recommended by HTML5.  
The syntax for doctype is: \<!DOCTYPE html>.

## 5. HTML ELEMENTS

Elements are the things that actually make up the web page. Tags just define the beginning and end of the elements. Everything that a web page includes is an HTML element.

**Eg:** this is an HTML element: \<b>This text is bold\</b>

- The HTML element starts with a opening tag: \<b>
- The content of the HTML element is: This text is bold
- The HTML element ends with an closing tag: \</b>

### 5.1 Paragraphs

Paragraphs are blocks of text separated from each other by some space. They are defined using the \<p> and \</p> tags. When p element ends, the next element appears in next line.

**Eg:** here's a sample of code for \<p> tag

```html
<html>
  <head>
    <title>p tag</title>
  </head>
  <body>
    <p>This is line 1</p>
    <p>This is line 2</p>

    This is line 1 This is line 2 This is line 3
  </body>
</html>
```

**output:**  
This is line 1  
This is line 2  
This is line 1 This is line 2 This is line 3

### 5.2 Heading

These are tags in HTML to mark some content as headings. In fact, there are six different levels of headings **h1, h2, h3, h4, h5 and h6**. Among them h1 _defines the largest heading_ and h6 _defines the smallest level heading_.

**Eg:** here's a sample of code for H tags

```html
<html>
  <head>
    <title>p tag</title>
  </head>
  <body>
    <h1>Heading level 1</h1>
    <h2>Heading level 1</h2>
    <h3>Heading level 1</h3>
    <h4>Heading level 1</h4>
    <h5>Heading level 1</h5>
    <h6>Heading level 1</h6>
  </body>
</html>
```

### 5.3 BR Tag

\<br> tag is used to introduce a single line break between the contents. This means that when this tag is used in between a single line, the content after this tag will move to the next line. Do not use it to provide space between block of elements(eg., paragraph and heading).

**Eg.,**

```html
<p>We are studying in<br />4Achievers</p>
```

**will show the paragraph as**

We are studing in  
4Achievers
