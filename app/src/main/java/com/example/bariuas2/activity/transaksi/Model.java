package com.example.bariuas2.activity.transaksi;

import java.util.Date;

public class Model {
    // TODO Edit This Scarlet
    public String id;
    public String gudangId;
    public String pelangganId;
    public String tanggal;
    public Integer jumlah;

    public Model(String gudangId, String pelangganId, String tanggal, Integer jumlah) {
        this.gudangId = gudangId;
        this.pelangganId = pelangganId;
        this.tanggal = tanggal;
        this.jumlah = jumlah;
    }
}
