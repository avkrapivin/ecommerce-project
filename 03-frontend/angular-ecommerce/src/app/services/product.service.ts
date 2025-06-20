import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private baseUrl = environment.luv2shopApiUrl + '/products';
    private categoryUrl = environment.luv2shopApiUrl + '/product-category';

    constructor(private httpClient: HttpClient) { }

    getProduct(theProductId: number): Observable<Product> {
        // need to build URL on product id
        const productUrl = `${this.baseUrl}/${theProductId}`;
        return this.httpClient.get<Product>(productUrl);
    }

    getProductListPaginate(thePage: number,
        thePageSize: number,
        theCategoryId: number): Observable<GetResponseProducts> {
        //TODO: need to build URL based on category id, page and size
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
            + `&page=${thePage}&size=${thePageSize}`;

        return this.httpClient.get<GetResponseProducts>(searchUrl);
    }

    getProductList(theCategoryId: number): Observable<Product[]> {
        //TODO: need to build URL based on category id
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

        return this.getProducts(searchUrl);
    }

    private getProducts(searchUrl: string): Observable<Product[]> {
        return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
            map(response => response._embedded.products)
        );
    }

    searchProducts(theKeyword: string): Observable<Product[]> {
        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

        return this.getProducts(searchUrl);
    }

    searchProductListPaginate(thePage: number,
                            thePageSize: number,
                            theKeyword: string): Observable<GetResponseProducts> {

        //TODO: need to build URL based on keyword, page and size
        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                        + `&page=${thePage}&size=${thePageSize}`;

        return this.httpClient.get<GetResponseProducts>(searchUrl);
    }

    getProductCategories(): Observable<ProductCategory[]> {
        return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
            map(response => response._embedded.productCategory)
        );
    }
}


interface GetResponseProducts {
    _embedded: {
        products: Product[];
    },
    page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
    }
}

interface GetResponseProductCategory {
    _embedded: {
        productCategory: ProductCategory[];
    }
}
