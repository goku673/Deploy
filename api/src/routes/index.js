const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require('./Country/index');
const  ActivityRouter = require('./Activity/index')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries",countryRouter)
router.use("/activities",ActivityRouter)

module.exports = router;


