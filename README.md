# ix

A collection on useful Übersicht widgets

---

> ⚠️ This is beta software, expect many changes

---

## Table of Contents

- ⚙️ [Common](#common)
- ⏲ [timer.jsx](#timer.jsx)
- 📆 [outdated.jsx](#outdated.jsx)

## Common

### Installation

```bash
# change to the Übersicht widget directory
$ cd ~/Library/Application\ Support/Übersicht/widgets

# ... and sync the ix github repo
$ git clone https://github.com/qu4k/ix
```

### Configuration

Every configurable widget needs to have a `<widget>.config.js` file inside the
[`lib`](lib) folder. Example configurations are provided inside that same folder
as `<widget>.config.sample.js`.

## timer.jsx

Display a table of countdowns to important events.

### Configuration

| Field | Content                                                                |
| ----- | ---------------------------------------------------------------------- |
| dates | Array of date objects (`{name: "Name of event": date: new Date(...)}`) |

## outdated.jsx

Periodically check if the `ix` repo is up-to-date, otherwise
show an alert message.
