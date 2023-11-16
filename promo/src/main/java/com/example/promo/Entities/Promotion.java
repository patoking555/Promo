package com.example.promo.Entities;

public class Promotion{
    private int id;
    private String Name;
    private String Title;
    private double Price;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    public String getTitle() {
        return Title;
    }
    public void setTitle(String title) {
        Title = title;
    }
    public double getPrice() {
        return Price;
    }
    public void setPrice(double price) {
        Price = price;
    }
    
    @Override
    public String toString() {
        return "Promotion [id=" + id + ", Name=" + Name + ", Title=" + Title + ", Price=" + Price + "]";
    }


    

}