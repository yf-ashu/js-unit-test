import {BookDao} from "./book_dao";

export class OrderService {
    sync_book_orders() {
        let orders = this.get_orders();
        console.log(orders);

        orders.filter((order) => {
            return order.orderType === "Book";
        }).forEach((order) => {
            let bookDao = new BookDao();
            bookDao.insert(order);
        });
    }

    get_orders() {
        const parse = require('csv-parse');
        const fs = require('fs');
        const fsPromises = fs.promises;
        const path = require('path');

        const inputFilePath = path.resolve(__dirname, './orders.csv');

        return main();

        async function main() {
            const inputFile = await fsPromises.readFile(inputFilePath);
            const parsedResult = await parseCSV(inputFile, {
                delimiter: ',',
                columns: true,
            });

            console.log('parsedResult', parsedResult);
            return parsedResult;
        }

        function parseCSV(input, options) {
            return new Promise((resolve, reject) => {
                parse(input, options, (error, output) => {
                    if (error) {
                        console.error('[ERROR] parseCSV: ', error.message);
                        reject('[ERROR] parseCSV: ', error.message);
                    }

                    resolve(output);
                });
            });
        }
    }
}