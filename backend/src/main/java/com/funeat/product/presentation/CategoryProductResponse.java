package com.funeat.product.presentation;

import com.funeat.product.domain.Product;

public class CategoryProductResponse {

    private final Long id;
    private final String name;
    private final Long price;
    private final String image;
    private final Double averageRating;
    private final Long reviewCount;

    public CategoryProductResponse(final Long id, final String name, final Long price, final String image,
                                   final Double averageRating, final Long reviewCount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.averageRating = averageRating;
        this.reviewCount = reviewCount;
    }

    public static CategoryProductResponse toResponse(final Product product, final Long reviewCount) {
        return new CategoryProductResponse(product.getId(), product.getName(), product.getPrice(), product.getImage(),
                product.getAverageRating(), reviewCount);
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }

    public Double getAverageRating() {
        return averageRating;
    }

    public Long getReviewCount() {
        return reviewCount;
    }
}
