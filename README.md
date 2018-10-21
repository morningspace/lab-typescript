## MorningSpace Lab 

[晴耕实验室](https://morningspace.github.io/lab)

[![晴耕小筑](https://morningspace.github.io/assets/images/banner.jpg)](https://morningspace.github.io/lab)

# The Path to TypeScript

Keywords: TypeScript

## Overview

This is the lab project to demonstrate how to migrate a JavaScript project into TypeScript project step by step.

The project `TaskMe` is a very simple task management API service built by [LoopBack](http://loopback.io/). It was originally written in JavaScript. To "tsify" it, there are a few branches from `tsify-original` to `tsify-misc`, where each branch represents a certain stage on the migration path. By hitting the GitHub [Compare changes](https://github.com/morningspace/lab-typescript/compare) view, you can see the difference between each two branches.

Please check the below instructions to learn how to play with it.

You can also find the online slides [here](https://morningspace.github.io/lab-typescript), where it discussed:
* Why TypeScript is so popular?
* What is TypeScript? (by a few [demos](https://github.com/morningspace/lab-typescript/tree/master/code/demos))
* How to tsify?

And the [video series](http://list.youku.com/albumlist/show/id_51919965.html) recorded for the slides.

For more lab projects from MorningSpace Lab, please check [morningspace.github.io](https://morningspace.github.io).

## Instructions

### Branch: tsify-original

The very beginning stage. No TypeScript at all.

### Branch: tsify-basic-use

This is the basic use of TypeScript. You can start to write TypeScript without changing any of your existing code. By adding type declaration files of project dependencies, you can enjoy auto-completion and code navigation when you call your dependencies. You can also get early benefits by trying to enable a few options in tsconfig.json, e.g. noImplicitReturns, noFallthroughCasesInSwitch, etc.

### Branch: tsify-simple-trans

Start to transform some JavaScript src files into TypeScript src files w/o big effort. Just simple rename and probably some tweaks in tsconfig.json to avoid tsc complains.

### Branch: tsify-deep-trans

Transform more JavaScript src files into TypeScript src files, add more TypeScript features incrementally, and use TypeScript more deeply. It normally requires some adjustments in the source code and tweaks in tsconfig.json.

### Branch: tsify-misc

Complete migration to TypeScript project, add tslint for lint check, nyc for code coverage, debug settings in vscode for TypeScript debugging, etc.

## Troubleshooting

Some typical errors can be seen as below when do the transformation.

#### Error TS2339: Property 'abc' does not exist on type 'xyz'.

The simplest resolution to this issue is to define the type 'xyz' as _any_. Of course you can define _interface_ if it deserves. Keep in mind, whenever you use _any_, you lose out on most of the error checking and editor support that TypeScript gives you.

#### Error TS2451: Cannot redeclare block-scoped variable 'xyz'

This is caused by the use of _let_ or _var_ when _require_ external module. Use ES6 syntax, the import statement instead.

#### Error TS2693: 'Promise' only refers to a type, but is being used as a value here

Add "es2015" in "lib" settings in tsconfig.json.

#### Error TS2307: Cannot find module 'your/path/to/something.json'

Since TypeScript 2.9, JSON file import has been well supported by enabling resolveJsonModule in tsconfig.json. See: https://blogs.msdn.microsoft.com/typescript/2018/05/31/announcing-typescript-2-9/#json-imports

#### Error TS6133: 'err' is declared but its value is never read.

See https://github.com/Microsoft/TypeScript/issues/9458.
