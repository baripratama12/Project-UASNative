package com.example.bariuas2.activity.pelanggan;

import com.example.bariuas2.response.GetAllResponse;
import com.example.bariuas2.response.GetResponse;

import java.util.Map;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;

public interface Handler {
    // TODO Edit This Scarlet
    @POST("/api/rest/pelanggan/")
    Call<GetResponse<Model>> createData(@Body Model model);
    @GET("/api/rest/pelanggan/")
    Call<GetAllResponse<Model>> getAllData();
    @PUT("/api/rest/pelanggan/{id}")
    Call<GetResponse<Model>> updateData(@Path("id") String id, @Body Map<String, Object> data);
    @DELETE("/api/rest/pelanggan/{id}")
    Call<GetResponse<Model>> deleteData(@Path("id") String id);
}
