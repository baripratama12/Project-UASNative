package com.example.bariuas2.activity.gudang;

public class Model {
    // TODO Edit This Scarlet
    public String id;
    public Integer stok;
    public String barangId;
    public String pemasokId;
    public String karyawanId;

    public Model(Integer stok, String barangId, String pemasokId, String karyawanId) {
        this.stok = stok;
        this.barangId = barangId;
        this.pemasokId = pemasokId;
        this.karyawanId = karyawanId;
    }
}
