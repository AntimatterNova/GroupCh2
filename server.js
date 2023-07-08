app.use(routes);
// router.get('/', async(req, res) => {
//     res.render('main');
// });
// sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log("Now listening"));
// });
