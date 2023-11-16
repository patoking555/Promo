package com.example.promo.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Enterprise {
    private int Id;
    private String Name;

    @Id
    public int getId() {
        return Id;
    }
    public void setId(int id) {
        Id = id;
    }
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }

    @Override
    public String toString() {
        return "Enterprise [Id=" + Id + ", Name=" + Name + "]";
    } 

    
}
