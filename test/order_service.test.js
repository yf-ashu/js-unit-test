import {OrderService} from "../src/order_service";

describe('sync book orders', function () {
    it('should only sync book orders', () => {
        let orderService = new OrderService();
        const fake_get_orders = jest.fn();
        fake_get_orders.mockReturnValueOnce([
            {orderType: "Book", price: 100},
            {orderType: "CD", price: 200},
            {orderType: "Book", price: 300},
        ]);
        orderService.get_orders = fake_get_orders;
        const fake_insert = jest.fn();
        orderService.insert = fake_insert;

        orderService.sync_book_orders();
        let insert_calls = fake_insert.mock.calls;
        expect(insert_calls.length).toBe(2);
        expect(insert_calls[0][0]).toEqual({orderType: "Book", price: 100});
        expect(insert_calls[1][0]).toEqual({orderType: "Book", price: 300});
    });
});