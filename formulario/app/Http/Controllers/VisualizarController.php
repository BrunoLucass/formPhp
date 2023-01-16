<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;

class VisualizarController extends Controller
{
    public function visualizar()
    {
        $data_form = Form::all();
        return view('visualizar',['data_form' => $data_form]);
    }
}
   

