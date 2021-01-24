import {OrderService} from "../src/order_service";

describe('sync book orders', function () {
    const fakeOrderList=[
            {orderType: "Book"},
            {orderType: "Other"},
            {orderType: "Book"},   
    ]
    it('should only sync book orders', () => {
        let orderService = new OrderService();
        orderService.get_orders=jest.fn().mockReturnValueOnce(fakeOrderList);
        const fakeBookDao=jest.fn()

        orderService.getBookDao=jest.fn().mockReturnValueOnce()
        expect(mock.calls[0][0]).toBe(`order type:${order.orderType}`);

       
        // expect(orderService.sync_book_orders()).toBe(`order type:Book`);
    });
});