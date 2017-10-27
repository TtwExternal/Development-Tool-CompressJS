//----------------------------------------------------------------------------------------------------;
var fileNm = "CompressJS_Directory__SaveFile__AllMerge_DelLog.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
STtwUtilBuffer.iconv = require( "iconv-lite" );

//global.Lib.Ttw.CLASS.Compressor;
//global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS.dll" );//Windows;
//global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS.dylib" );//Mac;
//global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS.so" );//Linux;

//global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS-AllMerge.dll" );//Windows;
//global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS-AllMerge.dylib" );//Mac;
//global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS-AllMerge.so" );//Linux;

global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS-AllMerge-DelLog.dll" );//Windows;
//global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS-AllMerge-DelLog.dylib" );//Mac;
//global.Lib.Ttw.importTll( "./node_modules/exes/CompressJS-AllMerge-DelLog.so" );//Linux;

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;

//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - LOCAL AREA;

//----------------------------------------------------------------------------------------------------;

STtwUtilBuffer.iconv = require( "iconv-lite" );

//----------------------------------------------------------------------------------------------------;

//*/
global._$TATIC_CONST_DEBUG = true;
/*/
global._$TATIC_CONST_DEBUG = false;
//*/

/*///----------------------------------------------------------------------------------------------------;
global.TtwPackageNodeJS__REQUIRES__Compressor();

//대상 폴더 이하 모든 *.js 파일들의 소스를 압축한다.(압축불가 시 에러 발생);
//global.Lib.Ttw.compressor = new global.Lib.Ttw.CLASS.Compressor({ instanceKey : "global.Lib.Ttw.compressor" });

//대상 폴더 이하 모든 *.js 파일들의 소스를 압축한다.(압축불가 시 에러 발생);
//모든 *.js 소스를 규칙에 의거하여 삭제하는 로직 추가;
//대상 폴더 이하 모든 *.js 파일들의 소스를 합친 소스를 저장한다.;
//대상 폴더 이하 모든 *.js 파일들의 소스를 압축하여 합친 소스를 저장한다.;
global.Lib.Ttw.compressor = new global.Lib.Ttw.CLASS.Compressor__SaveFile__AllMerge({ instanceKey : "global.Lib.Ttw.compressor__SaveFile__AllMerge" });

//대상 폴더 이하 모든 *.js 파일들의 소스를 압축한다.(압축불가 시 에러 발생);
//모든 *.js 소스를 규칙에 의거하여 삭제하는 로직 추가;
//대상 폴더 이하 모든 *.js 파일들의 소스를 합친 소스를 저장한다.;
//대상 폴더 이하 모든 *.js 파일들의 소스를 압축하여 합친 소스를 저장한다.;
//소스를 정리하는 로직이 대량.. 문제 발생 소지 존재함;
//global.Lib.Ttw.compressor = new global.Lib.Ttw.CLASS.Compressor__SaveFiles__debug_min_original({ instanceKey : "global.Lib.Ttw.compressor__SaveFiles__debug_min_original" });
//*///----------------------------------------------------------------------------------------------------;

global.Lib.Ttw.compressor = global.Lib.Ttw.compressor__SaveFile__AllMerge;
global.Lib.Ttw.compressor.compress__js_folder( "D:/_/", null, true );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;