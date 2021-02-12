<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("Pages/{id?}", function ($id = null, request $request) {
    if ($id != null) {
        $sql = (array)DB::table('Pages')->where('Id', $id)->first();
        $return = ["Page" => [$sql]];
        return response()->json($return, 200);
    } else if ($id == null) {
        $sql = json_decode(DB::table('Pages')->get(), true);
        $return = ["Pages" => [$sql]];
        return response()->json($return, 200);

        // $sql =json_decode (DB::table('Pages')->get(), true) ;
        // $return= ["Pages"=>[]];
        // foreach ($sql as $respons) {
        // $id=DB::table('Pages')->where('Id', $respons['Id'])->value('Id');
        // $Link=DB::table('Pages')->where('Id', $respons['Id'])->value('Link');
        //     $Page=[
        //         $id,
        //         $Link
        //     ];
        // array_push($return["Pages"], $Page);
        // }
        // return response()->json($return, 200);
    } else if ($id != null && !(is_int($id))) {
        return response()->json(
            ['error' => (object) ["message" => "Invalid  query"]],
            400
        );
    }
});

Route::post("Pages", function (request $request) {
    $Link = $request->input('Link');
    $id = DB::table('Pages')->insertGetId(
        ['Link' => "$Link"]
    );
    $return = ["Successfully created" => $id];
    return response()->json($return, 200);
});

Route::put("Pages/{id?}", function ($id = null, request $request) {
    if ($id == null) {
        return response()->json(
            ['error' => (object) ["message" => "Invalid  query"]],
            400
        );
    } else if ($id != null) {
        $Link = $request->input('Link');
        $return = ["Successfully created" => $id];
        DB::table('Pages')
            ->where('id', $id)
            ->update(['Link' => $Link]);
        $return = (array)DB::table('Pages')->where('Id', $id)->first();
        return response()->json(['Success' => ["Page" => [$return]]], 200);
    }
});


Route::post("Users", function (request $request) {
    $id = $request->input('Id');
    $name = $request->input('Name');
    DB::table('Users')->insert([
        'Name' => "$name",
        'Id' => $id,
    ]);
    $return = ["Successfully created" => $id];
    return response()->json($return, 200);
});


Route::post("Commentaires", function (request $request) {
    $Pages_id = $request->input('Page_id');
    $User_id = $request->input('User_id');
    $Content = $request->input('Content');
    $comment_plus_1 = DB::table('Users')->where('Id', $User_id)->value('nb_comm');
    $comment_plus_1++;
    $id = DB::table('Commentaires')->insertGetId([
        'Pages_id' => "$Pages_id",
        'User_id' => "$User_id",
        'Content' => "$Content",
    ]);
    $return = ["Successfully created" => $id];
    DB::table('Users')->where('Id', $User_id)->update([
        'nb_comm' => $comment_plus_1,
    ]);
    $return = ["Successfully created" => $id];
    return response()->json($return, 200);
});

Route::get("Commentaires", function ($id = null, request $request) {
    $sql = json_decode(DB::table('Commentaires')->get(), true);
    $return = ["Commentaires" => [$sql]];
    return response()->json($return, 200);
});
