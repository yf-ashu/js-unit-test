import {OrderService} from "../src/order_service";

describe('sync book orders', function () {
    let orderService;
    let fake_get_orders;
    let fake_insert;
    beforeEach(() => {
        orderService = new OrderService();
        fake_get_orders = jest.fn();
        orderService.get_orders = fake_get_orders;
        fake_insert = jest.fn();
        orderService.insert = fake_insert;
    });

    it('should only sync book orders', () => {
        given_orders([
            {orderType: "Book", price: 100},
            {orderType: "CD", price: 200},
            {orderType: "Book", price: 300},
        ]);

        orderService.sync_book_orders();

        should_insert_orders(2
            , {orderType: "Book", price: 100}
            , {orderType: "Book", price: 300});
    });

    function given_orders(orders) {
        fake_get_orders.mockReturnValueOnce(orders);
    }

    function should_insert_orders(times, first_order, second_order) {
        let insert_calls = fake_insert.mock.calls;
        expect(insert_calls.length).toBe(times);
        expect(insert_calls[0][0]).toEqual(first_order);
        expect(insert_calls[1][0]).toEqual(second_order);
    }

});