package com.example.bariuas2;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RecyclerView recyclerView = findViewById(R.id.recyclerView);

        List<Model> itemList = new ArrayList<>();

        // TODO Edit This Too
        itemList.add(new Model(
                new Intent(this, com.example.bariuas2.activity.barang.Activity.class),
                "Barang",
                "/api/rest/barang"
        ));
        itemList.add(new Model(
                new Intent(this, com.example.bariuas2.activity.pelanggan.Activity.class),
                "Pelanggan",
                "/api/rest/pelanggan"
        ));
        itemList.add(new Model(
                new Intent(this, com.example.bariuas2.activity.pemasok.Activity.class),
                "Pemasok",
                "/api/rest/pemasok"
        ));
        itemList.add(new Model(
                new Intent(this, com.example.bariuas2.activity.gudang.Activity.class),
                "Gudang",
                "/api/rest/gudang"
        ));
        itemList.add(new Model(
                new Intent(this, com.example.bariuas2.activity.transaksi.Activity.class),
                "Transaksi",
                "/api/rest/transaksi"
        ));
        itemList.add(new Model(
                new Intent(this, com.example.bariuas2.activity.karyawan.Activity.class),
                "Karyawan",
                "/api/rest/karyawan"
        ));


        TextView tableTitle = findViewById(R.id.tableTitle);
        tableTitle.setText(String.format("Table List (%d):", itemList.size()));

        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(new MainAdapter(itemList, this));
    }
}
