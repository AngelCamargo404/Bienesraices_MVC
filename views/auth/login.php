<main class="contenedor seccion contenido-centrado">
    <h1 data-cy="heading-login">Iniciar Sesión</h1>

    <?php forEach($errores as $error) : ?>
        <div data-cy="alerta-login" class="alerta error"><?php echo $error;?></div>
    <?php endforEach; ?>

    <form data-cy="formulario-login" method="POST" class="formulario" action="/login">

        <fieldset>
            <legend>Email y Password</legend>

            <label for="email">E-mail</label>
            <input data-cy="email-login" name="email" type="email" placeholder="Tu Email" id="email">

            <label for="password">Contraseña</label>
            <input data-cy="password-login" name="password" type="password" placeholder="Tu Contraseña" id="password" >
        </fieldset>

        <input type="submit" value="Iniciar Sesión" class="boton boton-verde" >

    </form>
</main>