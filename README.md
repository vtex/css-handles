# @vtex/css-handles

> Module for handling CSS classes

### Setup

```sh
yarn add @vtex/css-handles
```

### Usage

```jsx
import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const FooComponent = ({ blockClass }) => {
  const classes = generateBlockClass(styles.container, blockClass)

  return (
    <div className={classes}>
      Hello world!
    </div>
  )
}

export default FooComponent
```

### Development

Install `@pika/pack`:

```sh
npm install -g @pika/pack
```

You can run its build:

```
pack build
```

### Publishing

Install `@pika/pack`:

```sh
npm install -g @pika/pack
```

Run:

```
pack publish
```
