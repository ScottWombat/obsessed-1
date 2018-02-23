import { run, option } from 'runjs'


function minifyCSS(){
    run('node-sass --output-style compressed ./assets/css/main.css -o ./build/public/css/')
    run('node-sass --output-style compressed ./assets/css/import_fonts.css -o ./build/public/css/')
    run('node-sass --output-style compressed ./assets/css/canvas.css -o ./build/public/css/')
    run('node-sass --output-style compressed ./assets/css/intro.css -o ./build/public/css/')
}
export function uglifyJS(){
    run('uglifyjs ./assets/js/initMood.js -o ./build/public/js/initMood.min.js')
}

    
export function clean(){
     run('rm -rf ./build')
}

function buildClient(){
     run('webpack --config webpack/webpack.prod.client.config.babel.js -p --progress --profile')
}

function buildServer(){
     run('webpack --config webpack/webpack.prod.server.config.babel.js -p --progress --profile')
}

/* build app usig webpack */
export function  build(){
    clean()
    buildClient()
    buildServer()
    uglifyJS()
    //run('webpack --config webpack/webpack.prod.client.config.babel.js -p --progress --profile')
    //run('webpack --config webpack/webpack.prod.server.config.babel.js -p --progress --profile')
    //run('uglifyjs assets/js/initMood.js -o dist/public/js/initMood.min.js ')
    minifyCSS()
}

export function runNode(){
     
     //run('rm -rf build/*')
     //run('webpack --config webpack/webpack.prod.config.babel.js -p --progress --profile')
    build() 
    run("node bin/www")
}

export function monNode(){
    run("DEBUG=server-render/* nodemon ./bin/www")
}

export function hotModule(){
   // run("rm -rf ./hot_build")
   // run("webpack --config  webpack/webpack.dev.server.config.babel.js")
   // run("webpack-dev-server --config webpack/webpack.dev.client.config.babel.js")
    run("rm -rf ./hot_build&& npm-run-all --parallel webpack --config  webpack/webpack.dev.server.config.babel.js webpack-dev-server --config webpack/webpack.dev.client.config.babel.js")
}
