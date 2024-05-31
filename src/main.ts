import * as Awesome from "./mod.ts"

Awesome.Logger.log( "Hi!" )

console.log( Awesome.MathUtils.sum( 2, 3 ) )

Awesome.FetchAPI.fetchJSON( "/data.json" ).then( data => console.log( data ) )
