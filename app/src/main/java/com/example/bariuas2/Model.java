package com.example.bariuas2;

import android.content.Intent;

public class Model {
    Intent intent;
    String title;
    String subTitle;

    public Model(Intent intent, String title, String subTitle) {
        this.intent = intent;
        this.title = title;
        this.subTitle = subTitle;
    }
}
