### About:

The server is `express`.

The language is ES6.

The `ws` library is used for websockets

### Starting

First go to `scripts/env_setup.sh.example` and fill in the required environment variables. Then remove the `.example` from the extension. This file is in `.gitignore`.

There are two ways to start the app:
- using babel. Use the executables in the `scripts/` folder to do this
- using NodeJs. `npm start` accomplishes this.

Running `npm_start` will also source the `scripts/env_setup.sh` file, which configures the app. If the app is being started some other way, this file with have to be manually sourced before the app is run.

### The scripts in the `scripts/` folder:

_Note that all these scripts should be called from the repo's root directory. In other words, don't `cd` into `scripts/` before running a script.

- `scipts/babel_repl` is a REPL with the same language presets as the app
- `scripts/compile` will run Babel and save output to the `compiled` folder
- `scripts/run_compiled_app`
- `scripts/compile_and_run` just combines the aformentioned two scripts.




