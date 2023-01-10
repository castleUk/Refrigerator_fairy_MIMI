package com.example.demo.dto.response;

import com.example.demo.entity.Item;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class InventoryItemRespDto {

    private Long id;

    private Item item;

    private int count;

    private String storage;

    @Builder
    public InventoryItemRespDto(Long id, Item item, int count, String storage) {
        this.id = id;
        this.item = item;
        this.count = count;
        this.storage = storage;
    }
    
}
