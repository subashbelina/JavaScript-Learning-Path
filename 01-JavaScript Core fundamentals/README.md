# 01 — JavaScript Core fundamentals

Core JavaScript from scratch. **Start here if you are new.**

Each subfolder covers one topic. Open files in the order listed below — earlier topics build on later ones.

---

## Recommended Order

### Week 1 — Basics

| # | Folder / File | What you learn |
|---|---------------|----------------|
| 1 | `Data-types/string.js` | Text values |
| 2 | `Data-types/number.js` | Numbers and math |
| 3 | `Data-types/boolean.js` | true and false |
| 4 | `Data-types/null.js` | Intentional empty value |
| 5 | `Data-types/undefined.js` | Unassigned value |
| 6 | `Data-types/array.js` | Lists of values |
| 7 | `Data-types/object.js` | Key-value collections |
| 8 | `Variables/let-const.js` | Modern variable declarations |
| 9 | `Variables/var.js` | Legacy variables (good to know) |
| 10 | `Variables/scope.js` | Where variables are visible |
| 11 | `Operator/arithmetic.js` | Math operators |
| 12 | `Operator/comparison.js` | ==, ===, >, < |
| 13 | `Operator/logical.js` | &&, \|\|, ! |
| 14 | `Conditionals/if-else.js` | if / else decisions |
| 15 | `Conditionals/switch.js` | Multi-way branching |
| 16 | `Loops/for.js` | Counting loops |
| 17 | `Loops/while.js` | Condition-based loops |

### Week 2 — Functions & Data

| # | Folder / File | What you learn |
|---|---------------|----------------|
| 18 | `Function/declaration.js` | Named functions |
| 19 | `Function/expression.js` | Functions as values |
| 20 | `Function/arrow-function.js` | Short function syntax |
| 21 | `Function/parameters.js` | Passing data in |
| 22 | `Function/return.js` | Sending data out |
| 23 | `Function/callback.js` | Functions as arguments |
| 24 | `Array-methods/map.js` | Transform each item |
| 25 | `Array-methods/filter.js` | Keep matching items |
| 26 | `Array-methods/reduce.js` | Combine into one value |
| 27 | `Array-methods/forEach.js` | Loop over items |
| 28 | `Array-methods/find.js` | Find one item |
| 29 | `Array-methods/includes.js` | Check if item exists |
| 30 | `Array-methods/slice-splice.js` | Copy and modify arrays |

### Week 3 — Objects & Modern Syntax

| # | Folder / File | What you learn |
|---|---------------|----------------|
| 31 | `Objects/creation.js` | Create objects |
| 32 | `Objects/access-update.js` | Read and write properties |
| 33 | `Objects/methods.js` | Functions inside objects |
| 34 | `Objects/keys-values.js` | Object.keys(), Object.values() |
| 35 | `Objects/this-keyword.js` | Referring to the current object |
| 36 | `Destructuring/array.js` | Unpack array values |
| 37 | `Destructuring/object.js` | Unpack object properties |
| 38 | `Destructuring/nested-default.js` | Defaults and nested unpacking |
| 39 | `Spread-rest/spread-array.js` | Copy and merge arrays |
| 40 | `Spread-rest/spread-object.js` | Copy and merge objects |
| 41 | `Spread-rest/rest.js` | Collect remaining arguments |
| 42 | `Template-literals/basic.js` | Backtick strings |
| 43 | `Template-literals/multiline.js` | Multi-line strings |

### Week 4 — Advanced Basics

| # | Folder / File | What you learn |
|---|---------------|----------------|
| 44 | `Classes/basics.js` | class syntax |
| 45 | `Classes/inheritance.js` | extends and super |
| 46 | `Classes/static-getters.js` | Static methods and getters |
| 47 | `Variables/closures.js` | Functions remembering scope |
| 48 | `Function/higher-order.js` | Functions returning functions |
| 49 | `Function/iife.js` | Immediately invoked functions |
| 50 | `JSON/stringify.js` | Object → JSON string |
| 51 | `JSON/parse.js` | JSON string → object |

### Week 5 — Async & Browser

| # | Folder / File | What you learn |
|---|---------------|----------------|
| 52 | `Async-await/promises.js` | Promise basics |
| 53 | `Async-await/async-await.js` | async / await syntax |
| 54 | `Async-await/parallel.js` | Running tasks in parallel |
| 55 | `Fetch-api/get.js` | HTTP GET requests |
| 56 | `Fetch-api/post.js` | HTTP POST requests |
| 57 | `Error-handling/try-catch.js` | Catching errors |
| 58 | `Error-handling/throw.js` | Throwing custom errors |
| 59 | `Error-handling/async-errors.js` | Errors in async code |
| 60 | `ES6-modules/intro.js` | What modules are |
| 61 | `ES6-modules/named-exports.js` | export { } |
| 62 | `ES6-modules/default-export.js` | export default |
| 63 | `ES6-modules/import-syntax.js` | import syntax |
| 64 | `DOM-basics/index.html` | **Open in browser** |
| 65 | `DOM-basics/select-elements.js` | querySelector |
| 66 | `DOM-basics/change-content.js` | Update page content |
| 67 | `DOM-basics/create-elements.js` | Add new elements |
| 68 | `DOM-basics/events.js` | Click and input handlers |

### Optional Deep Dives

These are useful but not required before moving to **02-Modern JavaScript**:

| File | Topic |
|------|-------|
| `Data-types/symbol.js` | Unique identifiers |
| `Data-types/bigint.js` | Very large integers |
| `Data-types/function.js` | Functions as a type |
| `Operator/assignment.js` | +=, -=, etc. |
| `Operator/ternary.js` | condition ? a : b |
| `Operator/bitwise.js` | Bit-level operations |
| `Operator/unary.js` | ++, --, typeof |
| `Loops/do-while.js` | Loop at least once |
| `Loops/for-of.js` | Loop over iterables |
| `Loops/for-in.js` | Loop over object keys |
| `Conditionals/nested.js` | Nested if statements |
| `Array-methods/mutation.js` | push, pop, shift, unshift |
| `Objects/copy-merge.js` | Object.assign |

---

## How to Study a File

1. Read the **header comment** (top of file)
2. Read each line of code
3. Guess what `console.log` will print
4. Run the file: `node path/to/file.js`
5. Compare your guess with the output
6. Change one value and run again

---

## Run Examples

```bash
# From the project root:
node "01-JavaScript Core fundamentals/Variables/let-const.js"
node "01-JavaScript Core fundamentals/Array-methods/map.js"
node "01-JavaScript Core fundamentals/Async-await/async-await.js"
```

---

## Next Step

When you are comfortable with variables, functions, arrays, objects, and async basics, move to:

**[02-Modern JavaScript](../02-Modern%20JavaScript/README.md)**
