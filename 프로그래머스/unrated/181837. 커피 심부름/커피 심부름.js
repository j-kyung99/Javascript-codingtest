function solution(order) {
    const ame = order.filter(v => v.includes("americano") || v.includes("anything")).length;
    const latte = order.filter(v => v.includes("cafelatte")).length;
    return ame * 4500 + latte * 5000;
}