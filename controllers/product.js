const products = [
    {id: 1, name: 'Product A'},
    {id: 2, name: 'Product B'},
    {id: 3, name: 'Product C'}
];
export const list = (req, res,) => {
    res.json(products);
};
export const real = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
};
export const create = (req, res) => {
    products.push(req.body);
    res.json(products);
};
export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
};
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
};