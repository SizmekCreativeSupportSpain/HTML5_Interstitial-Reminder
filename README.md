# <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/HTML5.png" alt="Sizmek" width="26" height="36" /></a> Interstitial + Reminder <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/logo-dark.png" alt="Sizmek" width="57" height="15" /></a>

Plantilla genérica con todo lo necesario para crear formatos tipo interstitial con reminder utilizando workspaces de Sizmek.

## Descripción

La plantilla para montar el interstitial con reminder consta de dos ficheros html, uno para el reminder y otro para el interstitial. 

## Configuración 

Para cambiar el tamaño de los elementos del formato o el de auto cierre del interstitial, modifica los valores del fichero *adConfig.js* que se encuentra en el directorio raíz de la plantilla.

```javascript
var adConfig = {
    "reminder_width": "728",
    "reminder_height": "90",
    "inter_width": "800",
    "inter_height": "600",
    "auto_cierre": "8000" // milisegundos
};
```

Una vez configurado esto ya puedes trabajar tu creatividad sobre la plantilla.

Cuando tengas terminada la creatividad, sube la pieza a la plataforma. En este caso, el formato que debes seleccionar en la plataforma es **HTML5 EXPANDABLE BANNER**. ¿No tienes claro cómo? Puedes seguir esta pequeña guia [Subir Creatividades Sizmek](http://sizmek.es/wiki/doku.php?id=subir_creatividades_html5).

Tambien tendras que añadir el panel del interstitial y darle el tamaño correspondiente. Si tienes que realizar algun cambio despúes de configurar la creatividad y reemplazar el html del inter tendrás que volver a configurar el tamaño del panel.

Cuando hayas hecho esto deberias tener algo como en este ejemplo:

![Inter + Reminder Setup](https://cloud.githubusercontent.com/assets/15161388/10858605/8fcc087a-7f56-11e5-991c-c07989fdacda.png)

Recuerda que si tienes cualquier duda puedes ponerte en contacto con el equipo de <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a>

***