import OrderItem from "./order-item";

export default interface OrderData {
    amount: number,
    discount: number,
    orderItems: OrderItem[],
    userId: number
}