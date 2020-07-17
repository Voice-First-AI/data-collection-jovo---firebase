# Jovo + Voice First: Data Collection

## Quick Start

## Use this as your Starter Project

You'll need the Jovo CLI. You can install it globally with NPM.

```sh
$ npm install -g jovo-cli
```

After successfully installing the Jovo CLI, you can install the template using one of the following commands:

```sh
$ git clone https://github.com/Voice-First-AI/data-collection-jovo---firebase.git

$ cd data-collection-middleware-hook

$ npm i
```

Run your Jovo Application Locally
```

# Run voice app, optionally with a --watch flag to restart on code changes.
$ jovo run [-w]
```

## Integrating Into existing Jovo Apps
1. Copy Middleware hook from bottom of [app.js](https://github.com/Voice-First-AI/data-collection-jovo---firebase/blob/master/src/app.js).
2. Copy Firebase Initialization from  top of [app.js](https://github.com/Voice-First-AI/data-collection-jovo---firebase/blob/master/src/app.js).
3. Add `serviceAccountKey.json` to your `src/` folder.
4. `jovo run`

> Read more about `jovo run` [here](https://www.jovo.tech/marketplace/jovo-cli#jovo-run).

If you now go to the [Jovo Debugger](https://www.jovo.tech/marketplace/jovo-plugin-debugger) by pressing `.` or clicking on the webhook url in the terminal, you can test your voice application right away.

![Debugger Example](./img/debugger.gif)

## Next Steps

Now that you got the template running on the Jovo Debugger, it is time to deploy your voice app! You can find a tutorial for building a complete Alexa skill [here](https://www.jovo.tech/tutorials/alexa-skill-tutorial-nodejs).

To see what else you can do with the Jovo Framework, take a look at the [Jovo Documentation](https://www.jovo.tech/docs/).

## About Jovo

Jovo is the most popular development framework for voice, including platforms like Alexa, Google Assistant, mobile apps, and Raspberry Pi.

-   [Jovo Website](https://jovo.tech/)
-   [Documentation](https://jovo.tech/docs/)
-   [Marketplace](https://www.jovo.tech/marketplace/)
-   [Twitter](https://twitter.com/jovotech/)
-   [Forum](https://community.jovo.tech/)
