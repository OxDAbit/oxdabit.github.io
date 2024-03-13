---
date: 2022-01-09 17:10:00
layout: post
title: Customización del Terminal en Mac OSX
subtitle: Customización terminal mac osx
description: >-
  Customización del terminal en mac osx añadiendo Powerlevel 10k y diferentes herramientas como batcat o lsd.
image: >-
  assets/img/terminal_header.jpeg
optimized_image: >-
  assets/img/terminal_header.jpeg
category: blog
tags:
  - macosx
  - zsh
author: oxdabit
---

# Powerlevel 10K

---

1. Mediante el uso de `homebrew` instalamos el repositorio de **[github](https://github.com/romkatv/powerlevel10k)** `powerlevel10k`

    ```bash
    $ brew install romkatv/powerlevel10k/powerlevel10k
    $ echo "source $(brew --prefix)/opt/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc
    ```

2. Activación `powerlevel10k`
    1. Ejecutamos el comando `zsh`
        1. Le decimos `Yes` para proceder con la instalación
        2. Cerramos/Reiniciamos `iTerm` y lo volvemos a abrir
        3. Como disponemos de la tipografía ***Hack Nerd Font instalada***, nos realizará diversas preguntas a las que deberemos contestar para confirmar si podemos visualizar los símbolos. Una vez finalizada la tanda de preguntas se iniciará la configuración del `Promt`
        4. Para la configuración del `Prompt Syle`:
            1. Classic
            2. Unicode
            3. Dark
            4. No mostrar current time
            5. Angled
            6. Blurred
            7. Round
            8. One line
            9. Sparse
            10. May icons
            11. Fluent
            12. Enable transent Prompt
            13. 2
            14. yes
3. Customización `powerlevel10k`
    1. Acceder a la carpeta del usuario

        ```bash
        $ cd /home/user
        ```

    2. Modificar el archivo `.p10k.zsh`

        ```bash
        $ nano .p10k.zsh
        ```

        Comentamos todas las opciones contenidas dentro de la variable `typeset -g POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS`

        ```bash
        #    status                  # exit code of the last command
        #    command_execution_time  # duration of the last command
        #    background_jobs         # presence of background jobs
        #    direnv                  # direnv status (https://direnv.net/)
        ...
        ```

        Editamos las opciones que se deben mostrar a la izquierda dejando el contenido de la variable `typeset -g POWERLEVEL9K_LEFT_PROMPT_ELEMENTS` tal y como se muestra a continuación:

        ```bash
        typeset -g POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
            os_icon                 # os identifier
            dir                     # current directory
            # vcs                     # git status
            # prompt_char           # prompt symbol
            status
            command_execution_time
            context
          )
        ```

        Eliminamos el texto que aparece al logarnos como root y lo substituimos por un # modificando la línea tal y como se detalla a continuación:

        ```bash
        # Configuración original
        typeset -g POWERLEVEL9K_CONTEXT_ROOT_TEMPLATE='%B%n@%m'

        # Configuración custom
        typeset -g POWERLEVEL9K_CONTEXT_ROOT_TEMPLATE='#'
        ```

---

# Fuentes custom

---

1. Desde la página [**nerdfonts.com**](https://www.nerdfonts.com/font-downloads) accedemos a la sección **FONTS DOWNLOAD** y descargamos la fuente que más nos interese (Ex: ***Hack Nerd Font***)
2. Deszipamos el paquete y con doble click se ejecuta el asistente para el instalador de fuentes.
3. Modificamos tipografía en `iTerm` desde **Preferences > Profile > Pestaña Text** y seleccionamos la tipografía instalada (***Hack Nerd Font***)

---

# Comandos

---

## `bat` (`cat` con esteroides)

---

1. Repositorio [**Github**](https://github.com/sharkdp/bat)

2. Instalar `bat` mediante `homebrew` o `port`
    
    ```bash
    # Usando homebrew
    $ brew install bat
    
    # Usando port
    $ port install bat
    ```
    
3. Modificar el archivo `.zshrc` para que aplique los alias detallados a continuación:
    - `catn` → Ejecutará el comando `cat` normal
    - `cat` → Ejecutará el comando `bat`
    
    ```bash
    $ nano /Users/oxda_bit/.zshrc
    
    # Añadimos al final del archivo el contenido
    # Custom aliases
    alias catn="/bin/cat"
    alias cat="bat"
    ```
    

---

## `lsd` (`ls` con esteroides)

---

1. Repositorio [**Github**](https://github.com/Peltoche/lsd)

2. Instalar `lsd` mediante `homebrew` o `port`
    
    ```bash
    # Usando homebrew
    brew install lsd
    
    # Usando port
    sudo port install lsd
    ```
    
3. Modificar el archivo .zshrc para que aplique los alias detallados a continuación:
    - `lsn` → Ejecutará el comando `ls` normal
    - `ls` → Ejecutará el comando `lsd`
    
    ```bash
    # Custom aliases
    alias lsn="/bin/ls"
    alias ls="lsd"
    ```
    

---

## `ranger` → Navegador de carpetas en el terminal

---

1. Instalamos `ranger` mediante el uso de `homebrew`
    
    ```bash
    $ brew install ranger
    ```
    
2. Tras la instalación, mediante a ejecución del comando `ranger` se abre un explorador de archivos en el terminal

	![Ranger](/assets/img/posts/ranger.png)

---
