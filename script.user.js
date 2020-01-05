// ==UserScript==
// @name The West - Essentials
// @namespace https://the-west-scripts.github.io/The-West-Essentials/
// @author Tom Robert (Leotas/Falc0n.RG/neversleep1911/Rask Hund/Dun/Esperiano)
// @description The West 3.0
// @include https://*.the-west.*/game.php*
// @include https://*.the-west.*/index.php?page=logout
// @include https://www.the-west.*
// @include https://beta.the-west.net*
// @include http*://tw-db.info/*?strana=invent&x=*
// @exclude https://classic.the-west.net*
// @version 1.46.2
// @supportURL https://github.com/The-West-Scripts/The-West-Essentials/issues
// @icon https://the-west.net/favicon.ico
// @grant none
// ==/UserScript==
// translation:Tom Robert(German&English),Darius II/Wojcieszy/TeeNOmore127/pantomas(Polish),pepe100/HALCON DE ORO(Spanish),ruud99(Dutch),Creature/krcsirke(Hungarian),Timemod Herkumo(Greek),Elly Siranno/Raymond Reddington/jccwest/gamer(Portuguese),Billy-AR/tw81(Italian),Tom Robert/Falc0n.RG/Dun(French),Jamza/Surge(Czech&Slovak),Did97(Russian),OguzhanCekic(Turkish)
(function (fn) {
  var script = document.createElement('script');
  script.setAttribute('type', 'application/javascript');
  script.textContent = '(' + fn.toString() + ')();';
  document.body.appendChild(script);
  document.body.removeChild(script);
})(function () {
  if (location.href.includes('index.php?page=logout')) {
    location.href = '/';
  } else {
    TWXstart = {
      version: '1.46.2',
      langs: {
        en: {
          language: 'English',
          ApiGui1: 'This script contains many features to simplify your everyday life in The West.<br>More Informations',
          ApiGui2: 'Open script page',
          FeatLogout: 'Add a logout button on the right side',
          FeatStatusbar: 'Remove the taskbar',
          FeatShowAP: 'Show your actual skill points in job windows',
          FeatChangeCity: 'Switch title and player name in the town hall',
          FeatDuellMap: 'Add Duelmap tab in duel window',
          FeatMarkDaily: 'Highlight daily login bonus on day 5 to not miss it',
          FeatMarketTown: 'Show town name in market window',
          FeatMarketMessage: 'Get a message when there are items or money to pick up on actual market',
          FeatAchievHide: 'Hide completed achievements in achievements window',
          FeatRecipeMarket: 'Improve the purchase of recipes on market',
          FeatMoveJobs: 'Move the queued jobs a bit to the left',
          FeatBlinkEvents: 'Stop the blinking of the event, County Fair buttons on the left side',
          FeatFortTracker: 'Turn off fort battle reminder',
          FeatFriendsPop: 'Hide "Friend online" pop-ups',
          FeatInstantQuest: 'Complete the quest instantly if all requirements are done',
          FeatQuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
          FeatCityTravel: 'Show the travel time to the towns in the blackboard',
          FeatBetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
          FeatChatProfessions: 'Show the crafting profession of the players in the chat list',
          FeatQuestBookSearch: 'Search for solved quests in the quest book',
          FeatMarketRights: 'Show if market offers are public or only for alliance/town members',
          FeatEquipManagerPlus: 'Improve the equipment manager in the inventory',
          FeatShortPopups: 'Make the item pop-ups shorter',
          FeatHideNotis: 'Add a button to hide the job notifications on the left side',
          FeatJobProducts: 'Show in the job pop-up how many products you already have in your inventory',
          FeatMapDistance: ' Show the number of miles next to the travel time',
          FeatTraderSell: 'Sell multiple items at once to the trader',
          FeatTouchControl: 'Enable touch control on your mobile browser',
          settings1: 'Open settings',
          settings2: 'Open settings and information window',
          ghosttown1: 'Go to ghost town ',
          ghosttown2: 'Open ghost town',
          ghosttown3: 'Open ghost town and center it on map',
          indiantown1: 'Go to Indian village ',
          indiantown2: 'Open Indian village',
          indiantown3: 'Open Indian village and center it on map',
          openmarket: 'Open market',
          forum: 'Open town forum',
          newsets: 'New sets are added to the script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Info',
          contact: 'Contact',
          chooseLang: 'Choose language',
          features: 'Features',
          name: 'Name',
          save: 'Save',
          saveMessage2: 'Settings saved. Some changes need a refresh of the game window.',
          setbonus2: 'Informations about the set bonuses',
          frame2: 'Helpful web pages',
          choose: 'Click on the hat to get started',
          items: 'items',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          rest: 'Other',
          buff: 'Buffs',
          refresh: 'Refresh',
          noFriends: 'No Friends',
          reward: 'Reward',
          allprofessions: 'All Professions',
          market1: 'Items on market',
          market2: 'There are items/money on this market. What do you want to pick up?',
          all: 'All',
          onlyBids: 'Only bids',
          nothing: 'Nothing',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Town',
          level: 'Level',
          duelLevel: 'Duelling level',
          exp: 'Exp',
          distance: 'Distance',
          startduel: 'Start Duel',
          centerMap: 'Center map',
          popup: 'The opponent\'s skill bonus',
          damage: 'Damage',
          duelmap: 'Duelmap',
          duelradius: 'Duel radius',
          minutes: 'minutes',
          hour: '1 hour',
          hours: 'hours',
          searchOpp: 'Search for opponents',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          status: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          logout: 'Logout',
          accNfin: 'Accept & complete quest',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Load all your active worlds with one click',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          saveMessage: 'Saved successfully',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Adventures',
            work: '*Work',
            duel: '*Duels',
            energy: '*Energy',
            skill: '*Skill points',
            fk: '*Fort battles',
            speed: '*Speed',
            lp: '*Health points',
            luckNmoney: '*Luck & money',
            motivation: '*Motivation',
            experience: '*Experience',
            special: '*Premium/special',
            events: '*Events',
            chests: '*Open & unpack',
            equipment: '-Equipment',
            products: '-Products',
            questitems: '-Quest items',
            craftitems: '-Craft items',
            recipes: '-Recipes',
            nothingFound: 'No items of this type found!',
          },
        },
        de: {
          language: 'German (Deutsch)',
          ApiGui1: 'Das Script beinhaltet verschiedene Funktionen um den Alltag bei The West zu vereinfachen.<br>Weitere Informationen',
          ApiGui2: 'Skriptfenster öffnen',
          FeatLogout: 'Erstellt einen Logout-Button rechts in der Menüleiste',
          FeatStatusbar: 'Entfernt die Fensterleiste mit den verschiedenen Tabs im unteren Teil',
          FeatShowAP: 'Zeige die Arbeitspunkte im Job-Fenster',
          FeatChangeCity: 'Tausche Titel und Spielername in der Stadthalle',
          FeatDuellMap: 'Füge im Duellfenster einen Tab hinzu, der eine Duellkarte zeigt',
          FeatMarkDaily: 'Markiere Täglicher Loginbonus am Tag 5 besonders, um ihn nicht zu übersehen',
          FeatMarketTown: 'Zeige im Marktfenster, zu welcher Stadt es gehört',
          FeatMarketMessage: 'Wenn du an einem Markt stehst, wo etwas abgeholt werden kann, erscheint eine Meldung',
          FeatAchievHide: 'Verstecke alle abgeschlossenen Erfolge im Erfolgsfenster für eine bessere Übersicht',
          FeatRecipeMarket: 'Verbessert den Kauf von Rezepten im Markt',
          FeatMoveJobs: 'Verschiebe eingestellte Arbeiten ein wenig nach links',
          FeatBlinkEvents: 'Das Blinken der Event-, Wanderzirkus-Buttons usw. am linken Rand entfernen',
          FeatFortTracker: 'Fortkampftracker abschalten',
          FeatFriendsPop: '"Freund online" Pop-ups deaktivieren',
          FeatInstantQuest: 'Schliesse die Quest sofort ab, wenn die Voraussetzungen bereits erfüllt sind',
          FeatQuestWiki: 'Füge im Questfenster einen Link hinzu, der die Quest im Wiki zeigt',
          FeatCityTravel: 'Zeige die Reisezeit zu den Städten im Blackboard-Fenster',
          FeatBetterSheriff: 'Erweitere den Sheriff um einen Tab, welcher alle Kopfgelder auflistet',
          FeatChatProfessions: 'Zeige den Handwerksberuf der Spieler in der Chatliste',
          FeatQuestBookSearch: 'Suche im Questbuch nach abgeschlossenen Quests',
          FeatMarketRights: 'Zeige ob Marktangebote öffenltich oder nur für Allianz-/Stadtmitglieder sind',
          FeatEquipManagerPlus: 'Erweitere den Ausrüstungsmanager im Inventar',
          FeatShortPopups: 'Mache die Item-Popups kompakter',
          FeatHideNotis: 'Blende Arbeits-Benachrichtigungen am linken Rand mit einem Klick aus',
          FeatJobProducts: 'Zeige bei den Arbeiten, wie viele Produkte du bereits besitzt',
          FeatMapDistance: 'Zeige die Entfernung in Meilen neben der Reisezeit',
          FeatTraderSell: 'Ermöglicht dem Fahrenden Händler mehrere Gegenstände auf einmal zu verkaufen',
          FeatTouchControl: 'Aktiviere Touchsteuerung im mobilen Browser',
          settings1: 'Einstellungen öffnen',
          settings2: 'Öffnet das Informations- und Einstellungsfenster',
          ghosttown1: 'Gehe zur Geisterstadt ',
          ghosttown2: 'Öffne Geisterstadt',
          ghosttown3: 'Öffnet das Fenster der Geisterstadt und zentriert es auf der Map',
          indiantown1: 'Gehe zum Indianerdorf ',
          indiantown2: 'Öffne Indianerdorf',
          indiantown3: 'Öffnet das Fenster des Indianerdorfes und zentriert es auf der Map',
          openmarket: 'Öffne Marktfenster',
          forum: 'Öffne Stadtforum',
          newsets: 'Dem Script wurden neue Sets hinzugefügt',
          chooseItems: 'Wähle die Gegenstände aus',
          remindHover: 'Wenn die Gegenstände bereit zum Einsammeln sind, bekommst du einen Hinweis. Hier kannst du diese Items auswählen.',
          remindReady: 'Bereit zum Einsammeln',
          skipHover: 'Überspringe die Bestätigungs- und Resultatsmeldung beim Öffnen bestimmter Taschen. Hier kannst du diese Taschen auswählen.',
          skipDone: 'Du bekommst',
          info: 'Info',
          contact: 'Kontakt',
          chooseLang: 'Sprache auswählen',
          features: 'Features',
          name: 'Name',
          save: 'Speichern',
          saveMessage2: 'Einstellungen gespeichert. Manche Änderungen werden erst nach Neuladen des Spiels sichtbar.',
          setbonus2: 'Lass dir die Boni aller Sets anzeigen',
          frame2: 'Hilfreiche Webseiten',
          choose: 'Klicke auf den Hut und wähle aus',
          items: 'Gegenstände',
          parts: 'Teile',
          showItems: 'Zeige die Setgegenstände in deinem Inventar',
          noItems: 'Keine Gegenstände im Inventar gefunden. Klicke erneut mit CTRL um sie auf TW-Calc anzuzeigen.',
          ownSets: 'Nur eigene Sets',
          switchWeapon: 'Wähle Schuss- oder Schlagwaffe',
          selectBonus: 'Boni auswählen',
          resetB: 'Zurücksetzen',
          body: 'Kleidung',
          right_arm: 'Waffen',
          animal: 'Pferd & Produkt',
          rest: 'Andere',
          buff: 'Buffs',
          refresh: 'Aktualisieren',
          noFriends: 'Keine Freunde',
          reward: 'Belohnung',
          allprofessions: 'Alle Berufe',
          market1: 'Gegenstände auf dem Markt',
          market2: 'Es sind noch Gegenstände/Geld auf diesem Markt. Was soll abgeholt werden?',
          all: 'Alles',
          onlyBids: 'Nur Gebote',
          nothing: 'Nichts',
          worldwide: 'Weltweit',
          alliance: 'Allianz',
          town: 'Stadt',
          level: 'Stufe',
          duelLevel: 'Duellstufe',
          exp: 'EP',
          distance: 'Distanz',
          startduel: 'Starte Duell',
          centerMap: 'Zentriere Map',
          popup: 'Fertigkeitenbonus des Gegners',
          damage: 'Schaden',
          duelmap: 'Duellkarte',
          duelradius: 'Duellradius',
          minutes: 'Minuten',
          hour: '1 Stunde',
          hours: 'Stunden',
          searchOpp: 'Duellgegner suchen',
          amount: 'Tot',
          not_dead_amount: 'Lebendig',
          duellevel: 'Lvl',
          status: 'Status',
          sortBy: 'Sortiere nach',
          tooLow: 'Zu tiefe Duellstufe des Gegners',
          tooHigh: 'Zu hohe Duellstufe des Gegners',
          ownTown: 'Mitbürger deiner Stadt',
          attackable: 'Zeige nur duellierbare Spieler',
          logout: 'Logout',
          accNfin: 'Quest annehmen & abschließen',
          onWiki: 'Zeige die Quest im Wiki',
          longerName: 'Name muss länger als 2 Zeichen sein',
          loading: 'Lädt...',
          rename: 'Umbenennen',
          newName: 'Neuer Set-Name',
          used: 'Benutzt',
          renameWarning: 'Du ziehst das Set beim Umbenennen an und wieder aus.<br>Möglicherweise verlierst du deswegen Lebenspunkte!',
          sellItems: 'Items dem Händler verkaufen?',
          removeWorkNotis: 'Entferne die Arbeits-Benachrichtigungen',
          compInv: 'Klicke auf "Abbrechen, um nur auktionierbare Items anzuzeigen\n oder\nFüge andere Inventar-URL ein, um zu vergleichen',
          loginAll1: 'Alle einloggen',
          loginAll2: 'Lade all deine aktiven Welten mit einem Klick',
          custom1: 'Eigene',
          custom2: 'Deine eigene Login-Liste',
          edit: 'Bearbeiten',
          saveMessage: 'Speichern erfolgreich',
          CT: {
            ColorWindowTitle: 'Color tchat Einstellung',
            ColorWindowPreviewTxt: '*Klicke auf diese Buchstaben um die aktuell im oberen Feld gewählte Farbe reinzumischen',
            ColorWindowOkBtn: 'Übernehmen',
            ColorWindowToDefaultBtn: 'Zurücksetzen',
            ColorWindowThisTchatBtn: 'Einstellung speichern',
            ColorWindowDefaultText: 'Chaträume auf Standard setzen:',
            ColorWindowBold: 'Fett',
            ColorWindowCaps: 'CAPS LOCK',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Keine Farbe',
              'Eigener Farbcode',
              'rot',
              'braun',
              'violett',
              'blau',
              'grün',
              'pink',
              'magenta',
              'violett wechselnd',
              'blau wechselnd',
              'grün wechselnd',
              'rot wechselnd',
              'hellblau wechselnd',
              'pink wechselnd',
              'hellgrün wechselnd',
              'pink wechselnd',
              'hellrot wechselnd'
            ],
            ColorLoadTitle: 'Klicke um weitere Farben auszuwählen<br>Aktueller Farbcode: ',
            ColorSaveEmpty: '[leer]',
            CustomReady: 'Code ok',
            CustomNotReady: 'Ungültig',
          },
          QIS: {
            adventure: '*Abenteuer',
            work: '*Arbeit (AP)',
            duel: '*Duell',
            energy: '*Erholung (EP)',
            skill: '*Fertigkeiten (FP)',
            fk: '*Fortkampf (FK)',
            speed: '*Geschwindigkeit',
            lp: '*Lebenspunkte (LP)',
            luckNmoney: '*Glück & Geld',
            motivation: '*Motivation',
            experience: '*Erfahrung (XP)',
            special: '*Premium/Special',
            events: '*Events',
            chests: '*Öffnen & Auspacken',
            equipment: '-Ausrüstung',
            products: '-Arbeitsprodukte',
            questitems: '-Questprodukte',
            craftitems: '-Handwerk',
            recipes: '-Rezepte',
            nothingFound: 'Keine Gegenstände dieser Art gefunden!',
          },
        },
        pl: {
          language: 'Polish (polski)',
          ApiGui1: 'Skrypt ten zawiera wiele funkcji, aby uprościć codzienne życie na Zachodzie.<br>Więcej informacji',
          ApiGui2: 'Otwórz w nowej karcie',
          FeatLogout: 'Dodanie przycisku po prawej stronie, wyloguj się.',
          FeatStatusbar: 'Usuwa pasek z oknami w dolnej części gry.',
          FeatShowAP: 'Pokazuje Punkty Pracy (PP) w oknie danej pracy.',
          FeatChangeCity: 'Zamienia tytuł gracza na początku, w karcie graczy w ratuszu.',
          FeatDuellMap: 'Dodaje dodatkową zakładkę pojedynków, w pojedynkach.',
          FeatMarkDaily: 'Oznacza dodatkową ramką 5 dzień logowania.',
          FeatMarketTown: 'Dodaje nazwę miasta w karcie targu.',
          FeatMarketMessage: 'Jeżeli znajdujesz się w mieście gdzie coś jest do odebrania. Pojawia się komunikat.',
          FeatAchievHide: 'Ukrywa zaliczone osiągnięcia.',
          FeatRecipeMarket: 'Dodaje dodatkowe przyciski z receptami w karcie targ.',
          FeatMoveJobs: 'Przenieś zadania w kolejce trochę na lewo',
          FeatBlinkEvents: 'Zatrzymaj pulsowanie przycisków (zdarzenie, pomoce, ostrzeżenia itp) po lewej stronie',
          FeatFortTracker: 'Wyłącz przypomnienie o bitwie',
          FeatFriendsPop: 'Ukryj "Przyjaciel on-line" pop-ups',
          FeatInstantQuest: 'Wykonaj zadanie natychmiast, gdyby wszystkie wymagania zostały wykonane',
          FeatQuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
          FeatCityTravel: 'Show the travel time to the towns in the blackboard',
          FeatBetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
          FeatChatProfessions: 'Show the crafting profession of the players in the chat list',
          FeatQuestBookSearch: 'Search for solved quests in the quest book',
          FeatMarketRights: 'Show if market offers are public or only for alliance/town members',
          FeatEquipManagerPlus: 'Improve the equipment manager in the inventory',
          FeatShortPopups: 'Make the item pop-ups shorter',
          FeatHideNotis: 'Add a button to hide the job notifications on the left side',
          FeatJobProducts: 'Show in the job pop-up how many products you already have in your inventory',
          FeatMapDistance: ' Show the number of miles next to the travel time',
          FeatTraderSell: 'Sell multiple items at once to the trader',
          FeatTouchControl: 'Enable touch control for map and scrollbar on your mobile',
          settings1: 'Otwórz ustawienia',
          settings2: 'Otwiera okno ustawień oraz informacji o skrypcie.',
          ghosttown1: 'Idź do Miasta Widmo, dojście ',
          ghosttown2: 'Otwórz zadania w Mieście Widmo',
          ghosttown3: 'Otwiera okno z zadaniami w Mieście Widmo',
          indiantown1: 'Idź do Wioski Indiańskiej, dojście ',
          indiantown2: 'Otwórz zadania w Wiosce Indiańskiej',
          indiantown3: 'Otwiera okno z zadaniami w Wiosce Indiańskiej.',
          openmarket: 'Otwórz targ',
          forum: 'Otwórz forum',
          newsets: 'Nowe zestawy są dodawane do skryptu',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Informacja',
          contact: 'Kontakt',
          chooseLang: 'Wybierz język',
          features: 'Ustawienia',
          name: 'Nazwa',
          save: 'Zapisz',
          saveMessage2: 'Ustawienia zapisane. Niektóre zmiany potrzebują odświeżenia okna gry.',
          setbonus2: 'Informacje o ustawionych premie',
          frame2: 'Pomocna stron internetowych',
          choose: 'Kliknij na kapelusz i wybierz',
          items: 'przedmioty',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          rest: 'Other',
          buff: 'Buffs',
          refresh: 'Odświeżać',
          noFriends: 'Brak przyjaciół',
          reward: 'Nagroda',
          allprofessions: 'Wszystko',
          market1: 'Przedmioty na targu',
          market2: 'Na tym targu znajdują się przedmioty/kasa, odebrać?',
          all: 'Wszystko',
          onlyBids: 'Tylko oferty',
          nothing: 'Nic',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Miasto',
          level: 'Poziom',
          duelLevel: 'Poziom pojedynków',
          exp: 'Exp',
          distance: 'Odległość',
          startduel: 'Akcja',
          centerMap: 'Wyśrodkowanie',
          popup: 'Bonusy umiejętności przeciwnika',
          damage: 'Obrażenia',
          duelmap: 'Mapa pojedynków',
          duelradius: 'Zasięg',
          minutes: 'Minut',
          hour: '1 Godzina',
          hours: 'Godzin',
          searchOpp: 'Szukaj przeciwników',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          status: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          logout: 'Logout',
          accNfin: 'Przyjmij & zakończ zadanie',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Załaduj wszystkie aktywne światów za pomocą jednego kliknięcia',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          saveMessage: 'Saved successfully',
          CT: {
            ColorWindowTitle: 'Ustawienia Koloru Tchat',
            ColorWindowPreviewTxt: '*Kliknij na literę, aby zmienić kolor',
            ColorWindowOkBtn: 'Zastosuj',
            ColorWindowToDefaultBtn: 'Ustaw na domyślny',
            ColorWindowThisTchatBtn: 'Ustaw na ten',
            ColorWindowDefaultText: 'Wybierz tchat, który ma być domyślny: ',
            ColorWindowBold: 'Grubość',
            ColorWindowCaps: 'Wielkie litery',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Bez koloru',
              'Wprowadź kod koloru',
              'Czerwony',
              'Brązowy',
              'Fioletowy',
              'Niebieski',
              'Zielony',
              'Różowy',
              'Purpurowy',
              'Fioletowo gradientowy',
              'Zwietrzały ciemny niebieski',
              'Zielony gradient',
              'Zwietrzały czerwony',
              'Jasnoniebieski gradient',
              'Zwietrzały ciemny różowy',
              'Jasnozielony gradient',
              'Zwietrzały różowy',
              'Jasnoczerwony gradient'
            ],
            ColorLoadTitle: 'Kliknij tutaj, aby załadować inny kod koloru<br>Twój obecny kod koloru jest: ',
            ColorSaveEmpty: '[pusty]',
            CustomReady: 'Prawidłowy Kod',
            CustomNotReady: 'Zły Kod',
          },
          QIS: {
            adventure: '*Przygody',
            work: '*Prace',
            duel: '*Pojedynki',
            energy: '*Energia',
            skill: '*Umiejętności',
            fk: '*Bitwy fortowe',
            speed: '*Prędkość',
            lp: '*HP',
            luckNmoney: '*Luck & money',
            motivation: '*Motivation',
            experience: '*Experience',
            special: '*Premia/specjalny',
            events: '*Eventy',
            chests: '*Przedmioty - Skrzynie',
            equipment: '-Ekwipunek',
            products: '-Produkty',
            questitems: '-Przedmiot zlecenia',
            craftitems: '-Rzemiosło',
            recipes: '-Przepisy',
            nothingFound: 'Nie posiadasz żadnych przedmiotów tego typu!',
          },
        },
        es: {
          language: 'Spanish (español)',
          ApiGui1: 'El script incluye varias funciones que simplifican la vida cotidiana en The West.<br>Más información',
          ApiGui2: 'Abrir ventana del script',
          FeatLogout: 'Crea un botón de cierre de sesión a la derecha en la barra de menús',
          FeatStatusbar: 'Oculta la barra inferior de las ventanas',
          FeatShowAP: 'Ver los puntos de trabajo en la ventana de trabajo',
          FeatChangeCity: 'Cambiar título y nombre del jugador en el ayuntamiento',
          FeatDuellMap: 'Completar la ventana de duelos con una pestaña que muestra el mapa de duelos',
          FeatMarkDaily: 'Marcar el Bonus-Conexión-5 Días especialmente para que no te lo pierdas',
          FeatMarketTown: 'Mostrar en la ventana de mercado, la ciudad al que pertenece',
          FeatMarketMessage: 'Si llegas a un mercado donde tienes algo que puede ser recogido, aparece un mensaj',
          FeatAchievHide: 'Ocultar logros completados en la ventana de logros para una mejor visión',
          FeatRecipeMarket: 'Mejorar la compra de recetas en el mercado',
          FeatMoveJobs: 'Mover los trabajos en cola un poco a la izquierda',
          FeatBlinkEvents: 'Detener el parpadeo de los botones de Evento y Feria de Condado en el lado izquierdo',
          FeatFortTracker: 'Apagar el recordatorio de Batalla de fuerte',
          FeatFriendsPop: 'Esconder ventana emergente de "Amigo conectado"',
          FeatInstantQuest: 'Completar la misión al instante si se cumplen todos los requisitos',
          FeatQuestWiki: 'Agregar un enlace en la ventana de búsqueda para mostrar la búsqueda en la Wiki',
          FeatCityTravel: 'Mostrar el tiempo de viaje a las ciudades en la pizarra',
          FeatBetterSheriff: 'Añadir una nueva pestaña en la ventana del sheriff para ver todas las recompensas posibles',
          FeatChatProfessions: 'Mostrar el oficio de los jugadores en la lista del chat',
          FeatQuestBookSearch: 'Buscar misiones terminadas en libro de misiones',
          FeatMarketRights: 'Mostrar si las ofertas de mercado son públicas o solo para los miembros de la Alianza/Ciudad',
          FeatEquipManagerPlus: 'Mejorar el administrador de equipos en el inventario',
          FeatShortPopups: 'Hacer los pop-ups de articulos más cortos',
          FeatHideNotis: 'Agregar un botón para ocultar las notificaciones de trabajo en el lado izquierdo',
          FeatJobProducts: 'Mostrar en la ventana emergente de trabajo cuántos productos tienes en tu inventario',
          FeatMapDistance: 'Mostrar la cantidad de millas al lado del tiempo de viaje',
          FeatTraderSell: 'Vender varios artículos a la vez al comerciante',
          FeatTouchControl: 'Habilitar el control táctil para el mapa y la barra de desplazamiento en su dispositivo móvil',
          settings1: 'Abrir preferencias',
          settings2: 'Abrir la ventana de información y ajustes',
          ghosttown1: 'Ir a la Ciudad Fantasma ',
          ghosttown2: 'Abrir Ciudad Fantasma',
          ghosttown3: 'Abrir la ventana de la Ciudad Fantasma y centrarla en el mapa',
          indiantown1: 'Ir al Pueblo Indio Waupee ',
          indiantown2: 'Abrir Pueblo Indio Waupee',
          indiantown3: 'Abrir la ventana del Pueblo Indio Waupee y centrarla en el mapa',
          openmarket: 'Abrir Mercado',
          forum: 'Abrir el foro de la ciudad',
          newsets: 'Nuevos conjuntos añadidos al script',
          chooseItems: 'Elegir los artículos',
          remindHover: 'Recibir una notificación cuando un artículo puede volverse a usar. Aquí puedes elegir estos artículos.',
          remindReady: 'Listo para recoger',
          skipHover: 'Omitir los mensajes de confirmación y resultado cuando abres algunas bolsas. Aquí puedes elegir estas bolsas',
          skipDone: 'Obtienes',
          info: 'Información',
          contact: 'Contacto',
          chooseLang: 'Elige idioma',
          features: 'Funciones',
          name: 'Nombre',
          save: 'Guardar',
          saveMessage2: 'Ajustes guardados. Algunos cambios necesitan una actualización de la ventana de juego.',
          setbonus2: 'Información acerca de los bonus de conjunto',
          frame2: 'Páginas web votos',
          choose: 'Haga clic en el sombrero y elegir',
          items: 'artículos',
          parts: 'partes',
          showItems: 'Mostrar los artículos del conjunto en tu bolsa',
          noItems: '¡No se han encontrado artículos de este conjunto!',
          ownSets: 'Solo conjuntos propios',
          switchWeapon: 'Cambiar entre arma de fuego y arma contundente',
          selectBonus: 'Seleccionas bonus',
          resetB: 'Reiniciar',
          body: 'Ropa',
          right_arm: 'Armas',
          animal: 'Montura y Producto',
          rest: 'Otros',
          refresh: 'Actualizar',
          noFriends: 'Sin Amigos',
          reward: 'Recompensa',
          allprofessions: 'Todos Oficios',
          market1: 'Productos en el Mercado',
          market2: 'Todavía hay productos/dinero en el Mercado. ¿Desea recogerlos?',
          all: 'Todos',
          onlyBids: 'Solo Ofertas',
          nothing: 'Ninguno',
          worldwide: 'Mundo',
          alliance: 'Alianza',
          town: 'Ciudad',
          level: 'Nivel',
          duelLevel: 'Nivel Duelo',
          exp: 'Exp',
          distance: 'Distancia',
          startduel: 'Iniciar Duelo',
          centerMap: 'Centrar Mapa',
          popup: 'El bonus de habilidad del oponente',
          damage: 'Daño',
          duelmap: 'Mapa Duelos',
          duelradius: 'Radio duelos',
          minutes: 'Minutos',
          hour: '1 Hora',
          hours: 'Horas',
          searchOpp: 'Buscar Duelo',
          amount: 'Muerto',
          not_dead_amount: 'Vivo',
          duellevel: 'Niv',
          status: 'Estado',
          sortBy: 'Ordenar por',
          tooLow: 'Nivel de duelo del oponente demasiado bajo',
          tooHigh: 'Nivel de duelo del oponente demasiado alto',
          ownTown: 'Miembro de tu ciudad',
          attackable: 'Mostrar solo jugadores atacables',
          logout: 'Cerrar sesión',
          accNfin: 'Aceptar & concluir búsqueda',
          onWiki: 'Mostrar la búsqueda en la Wiki',
          longerName: 'El nombre debe tener más de 2 caracteres',
          loading: 'Cargando...',
          rename: 'Renombrar',
          newName: 'Elige un nuevo nombre de conjunto',
          used: 'Usado',
          renameWarning: 'Cuando renombre un conjunto, se lo pondrá y se lo quitará de nuevo.<br>¡Puede perder puntos de vida durante el proceso!',
          sellItems: '¿Vender artículos al comerciante?',
          removeWorkNotis: 'Ocultar todas las notificaciones de trabajo',
          compInv: 'Haga clic en "cancelar" para mostrar solo los artículos subastables \n o \n Ingrese otra URL de inventario para comparar',
          loginAll1: 'Conectarse a todos los mundos',
          loginAll2: 'Cargar todos los mundos activos con un solo click',
          custom1: 'Personalizar',
          custom2: 'Tu lista de conexión personalizada',
          edit: 'Editar',
          saveMessage: 'Grabado con éxito',
          CT: {
            ColorWindowTitle: 'Configurar Color tchat',
            ColorWindowPreviewTxt: '*Haga clic en la carta de un cambio de color',
            ColorWindowOkBtn: 'Aplicar',
            ColorWindowToDefaultBtn: 'Color por defecto',
            ColorWindowThisTchatBtn: 'Elegir este color',
            ColorWindowDefaultText: 'Seleccione la tchat para restablecer a los valores predeterminados',
            ColorWindowBold: 'En negrita',
            ColorWindowCaps: 'Capitalizado',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No hay color',
              'Introduzca un código de color',
              'rojo',
              'marrón',
              'morado',
              'azul',
              'verde',
              'rosa',
              'magenta',
              'gradiente violeta',
              'degradado rosa',
              'degradado azul marino',
              'gradient',
              'rojo degradado',
              'luz azul degradado',
              'gradiente de luz verde',
              'rosa degradado',
              'luz pendiente roja'
            ],
            ColorLoadTitle: 'Haga clic para cargar otro código de colores<br>El código de color actual es: ',
            ColorSaveEmpty: '[vacío]',
            CustomReady: 'Código válido',
            CustomNotReady: 'No válido',
          },
          QIS: {
            adventure: '*Buffs de Aventuras',
            work: '*Buffs de Trabajo',
            duel: '*Buffs de Duelo',
            energy: '*Buffs Energía',
            skill: '*Buffs de Habilidades',
            fk: '*Buffs de Batalla',
            speed: '*Buffs de Velocidad',
            lp: '*Buffs de Salud',
            luckNmoney: '*Suerte y Dinero',
            motivation: '*Motivación',
            experience: '*Experiencia',
            special: '*Premio/especial',
            events: '*Eventos',
            chests: '*Cajas y cofres',
            equipment: '-Equipo',
            products: '-Productos',
            questitems: '-Objetos de búsqueda',
            craftitems: '-Artesano',
            recipes: '-Recetas',
            nothingFound: 'No tienes de este tipo!',
          },
        },
        nl: {
          language: 'Dutch (Nederlands)',
          ApiGui1: 'Dit script bevat veel mogelijkheden om het dagelijks leven in The West te vergemakkelijken.<br>Voor meer informatie',
          ApiGui2: 'Open script pagina',
          FeatLogout: 'Voeg een afmeldknop toe aan de rechterzijde van het scherm',
          FeatStatusbar: 'Verwijder het dagelijkse taken icoon',
          FeatShowAP: 'Toon je vaardigheidspunten in werkzaamheidsscherm windows',
          FeatChangeCity: 'Verwissel de titel en de spelersnaam in het  stadhuis',
          FeatDuellMap: 'Voeg een duelkaart toe aan de duel tab',
          FeatMarkDaily: 'Markeer de dagelijkse inlogbonus op de 5e dag zodat je hem niet mist',
          FeatMarketTown: 'Toon stadsnaam in marktscherm',
          FeatMarketMessage: 'Krijg een bericht wanneer er voorwerpen of geld beschikbaar zijn om op te halen',
          FeatAchievHide: 'Verberg voltooide prestaties in prestatiescherm',
          FeatRecipeMarket: 'Verbeter overzicht voor recepten kopen.',
          FeatMoveJobs: 'Verschuif de werkzaamheden in de wachtrij een stukje naar links',
          FeatBlinkEvents: 'Stop het knipperen van event of circus knop aan linkerkant',
          FeatFortTracker: 'Schakel de fortgevecht herinnering uit',
          FeatFriendsPop: 'Verberg “uw vriend logt in” pop-ups',
          FeatInstantQuest: 'Voltooi de quest direct als aan alle vereisten is gedaan',
          FeatQuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
          FeatCityTravel: 'Show the travel time to the towns in the blackboard',
          FeatBetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
          FeatChatProfessions: 'Show the crafting profession of the players in the chat list',
          FeatQuestBookSearch: 'Search for solved quests in the quest book',
          FeatMarketRights: 'Show if market offers are public or only for alliance/town members',
          FeatEquipManagerPlus: 'Improve the equipment manager in the inventory',
          FeatShortPopups: 'Make the item pop-ups shorter',
          FeatHideNotis: 'Add a button to hide the job notifications on the left side',
          FeatJobProducts: 'Show in the job pop-up how many products you already have in your inventory',
          FeatMapDistance: ' Show the number of miles next to the travel time',
          FeatTraderSell: 'Sell multiple items at once to the trader',
          FeatTouchControl: 'Enable touch control for map and scrollbar on your mobile',
          settings1: 'Instellingen openen',
          settings2: 'Instellingen en informatiescherm openen',
          ghosttown1: 'Ga naar de Spookstad ',
          ghosttown2: 'Open Spookstad',
          ghosttown3: 'Open Spookstad en centreer het op de kaart',
          indiantown1: 'Ga naar Waupees indianendorp ',
          indiantown2: 'Open Waupees indianendorp',
          indiantown3: 'Open Waupees indianendorp en centreer het op de kaart',
          openmarket: 'Open markt',
          forum: 'Open stadsforum',
          newsets: 'Nieuwe sets worden toegevoegd aan het script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Informatie',
          contact: 'Contact',
          chooseLang: 'Kies een taal',
          features: 'Features',
          name: 'Naam',
          save: 'Opslaan',
          saveMessage2: 'Instellingen toegevoegd. Sommige veranderingen hebben behoefte aan een refresh van het spel venster.',
          setbonus2: 'Informatie over de set bonusen',
          frame2: 'Nuttige websites',
          choose: 'Klik op de hoed en kies',
          items: 'Voorwerpen',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          rest: 'Other',
          buff: 'Buffs',
          refresh: 'Verversen',
          noFriends: 'Geen vrienden',
          reward: 'Beloning',
          allprofessions: 'Alle Beroepen',
          market1: 'Voorwerpen op de markt',
          market2: 'Er zijn voorpen/geld op de markt. Wat wil je eraf halen?',
          all: 'Alles',
          onlyBids: 'Alleen biedingen',
          nothing: 'Niets',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Stad',
          level: 'Level',
          duelLevel: 'Duel level',
          exp: 'Ervaring',
          distance: 'Afstand',
          startduel: 'Duelleren',
          centerMap: 'Centreer kaart',
          popup: 'Vaardigheden-Bonus van de tegenstander',
          damage: 'Schade',
          duelmap: 'Duelkaart',
          duelradius: 'Duel radius',
          minutes: 'minuten',
          hour: '1 uur',
          hours: 'uren',
          searchOpp: 'Zoek naar tegenstanders',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          status: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          logout: 'Afmelden',
          accNfin: 'Opdracht aannemen & afsluiten',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Laad al uw actieve werelden met één klik',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          saveMessage: 'Saved successfully',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Avontuur',
            work: '*Werkzaamheid',
            duel: '*Duels',
            energy: '*Actiepunten',
            skill: '*Vaardigheden',
            fk: '*Fort gevechten',
            speed: '*Snelheid',
            lp: '*Levenspunten',
            luckNmoney: '*Luck & money',
            motivation: '*Motivation',
            experience: '*Experience',
            special: '*Premium/speciaal',
            events: '*Events',
            chests: '*Openen',
            equipment: '-Uitrusting',
            products: '-Producten',
            questitems: '-Opdracht gerelateerde voowerpen',
            craftitems: '-Handwerk',
            recipes: '-Recepten',
            nothingFound: 'Er kon geen voorwerp van dit type worden!',
          },
        },
        hu: {
          language: 'Hungarian (Magyar)',
          ApiGui1: 'Ez a szkript több olyan funkciót tartalmaz ami megkönnyíti a mindennapjaidat a vadnyugaton.<br>Több információ',
          ApiGui2: 'Szkript oldalának megnyitása',
          FeatLogout: 'Kilépés gomb a jobb oldalra',
          FeatStatusbar: 'Tálca eltüntetése',
          FeatShowAP: 'Valódi képességpontok a munkaablakokban',
          FeatChangeCity: 'Cím és játékosnév felcserélése a városházánál',
          FeatDuellMap: 'Párbajtérkép a párbaj ablakban',
          FeatMarkDaily: 'Az 5. napi belépés bónusz bekeretezése, hogy nehogy kihagyd',
          FeatMarketTown: 'Városnév megjelenítése a piac ablakban',
          FeatMarketMessage: 'Felugró ablak amikor tárgyak vagy pénz felvétele lehetséges az aktuális piacnál',
          FeatAchievHide: 'Befejezett események elrejtése az esemény ablakban',
          FeatRecipeMarket: 'Receptvásárlás megkönnyítése, rendezése a piacon',
          FeatMoveJobs: 'Mozgassa el a munka várólistát kissé balra hogy elférjenek az ikonok',
          FeatBlinkEvents: 'Események, eladás és piaci vásár gomb villogás kikapcsolása',
          FeatFortTracker: 'Kapcsolja ki az erődharc emlékeztetőt',
          FeatFriendsPop: 'Rejtse el a "barátod bejelentkezett" felugró ablakokat',
          FeatInstantQuest: 'Befejezni a küldetést, azonnal, ha minden feltétel kész',
          FeatQuestWiki: 'Link hozzáadása a kalandablakban, amin elérhető a kaland wikioldala',
          FeatCityTravel: 'Távolság a várostól mutatása a hirdetőtáblán',
          FeatBetterSheriff: 'Új lap hozzáadása a Seriff ablakban, láthatóvá téve az összes körözöttet',
          FeatChatProfessions: 'Mesterségek mutatása a játékosoknál a chat partnerlistánál',
          FeatQuestBookSearch: 'Keresés a befejezett kalandoknál a kalandkönyvben',
          FeatMarketRights: 'Piaci ajánlatoknál mutatása, hogy bárki számára elérhető vagy csak szövetség/város tagok számára',
          FeatEquipManagerPlus: 'Felszerelés kezelő ablak fejlesztése',
          FeatShortPopups: 'Tárgy felugró menüjének rövidítése',
          FeatHideNotis: 'Bal oldalon lévő munkaértesítéseket eltüntető gomb hozzáadása',
          FeatJobProducts: 'Munkáknál felugró menüben mutassa, mennyi terméked van már a felszerelésedben, ami az adott munkánál található',
          FeatMapDistance: ' Show the number of miles next to the travel time',
          FeatTraderSell: 'Sell multiple items at once to the trader',
          FeatTouchControl: 'Enable touch control for map and scrollbar on your mobile',
          settings1: 'Beállítások megnyitása',
          settings2: 'Beállítások és információk',
          ghosttown1: 'Menj el a Szellemvárosba ',
          ghosttown2: 'Szellemváros megnyitása',
          ghosttown3: 'Szellemváros megnyitása és ráközelítés térképen',
          indiantown1: 'Menj Waupee Indián falujába ',
          indiantown2: 'Indián falu megnyitása',
          indiantown3: 'Indián falu megnyitása és ráközelítés térképen',
          openmarket: 'Piac megnyitása',
          forum: 'Városfórum megnyitása',
          newsets: 'Új szett(ek) lettek hozzáadva a szkripthez',
          chooseItems: 'Válasz tárgyat',
          remindHover: 'Értesítést kapsz, amint egy tárgy ismét használható. Itt tudod kiválasztani melyik tárgyakról szeretnél értesítést kapni.',
          remindReady: 'Begyűjtésre készen áll',
          skipHover: 'Táskák nyitásánál megerősítő és jutalom üzenet figyelem kívül hagyása. Itt tudod kiválasztani melyik táska nyitásról ne kapj üzenetet.',
          skipDone: 'Ezt kapod',
          info: 'Információk',
          contact: 'Elérhetőségek',
          chooseLang: 'Válasszon nyelvet',
          features: 'Funkciók',
          name: 'Név',
          save: 'Mentés',
          saveMessage2: 'Beállítások elmentve. Néhány változás életbe lépéséhez frissítse a játék ablakát.',
          setbonus2: 'Információk a szettbónuszokról',
          frame2: 'Hasznos weboldalak',
          choose: 'Kattints a kalapra a kezdéshez, választáshoz',
          items: 'tárgyak',
          parts: 'darabok',
          showItems: 'Mutassa a szett tárgyakat a felszerelésedben',
          noItems: 'Nem található tárgy(ak) a felszerelésedben',
          ownSets: 'Csak a megszerzett szettek',
          switchWeapon: 'Váltás lőfegyver és ütőfegyver közt',
          selectBonus: 'Válasz bónuszt',
          resetB: 'Visszaállítás',
          body: 'Ruházat',
          right_arm: 'Párbajfegyver',
          animal: 'Állat',
          rest: 'Egyéb',
          buff: 'Buffs',
          refresh: 'Újratöltés',
          noFriends: 'Nincsenek barátok',
          reward: 'Díjak',
          allprofessions: 'Minden szakma',
          market1: 'Áruk a piacon',
          market2: 'Vannak Áruk/Pénz ezen a piacon. Mit szeretnél átvenni? ',
          all: 'Mindent',
          onlyBids: 'Árukat',
          nothing: 'Semmit',
          worldwide: 'Világ',
          alliance: 'Szövetség',
          town: 'Város',
          level: 'Szint',
          duelLevel: 'Párbajszint',
          exp: 'Tp',
          distance: 'Távolság',
          startduel: 'Párbaj kezdése',
          centerMap: 'Térkép közepére',
          popup: 'Az ellenfél bónusza',
          damage: 'Sebzés',
          duelmap: 'Párbajtérkép',
          duelradius: 'Párbaj sugár',
          minutes: 'perc',
          hour: '1 óra',
          hours: 'óra',
          searchOpp: 'Ellenfél keresése',
          amount: 'Halva',
          not_dead_amount: 'Élve',
          duellevel: 'Szint',
          status: 'Státusz',
          sortBy: 'Rendezés',
          tooLow: 'Túl alacsony a párbajszintje az ellenfélnek',
          tooHigh: 'Túl magas a párbajszintje az ellenfélnek',
          ownTown: 'Városod tagja',
          attackable: 'Csak a kihívható ellenfeleket mutassa',
          logout: 'Kijelentkezés',
          accNfin: 'Kaland elfogadása & lezárása',
          onWiki: 'Kaland mutatása a wikin',
          longerName: 'Névnek két karakternél hosszabbnak kell lennie',
          loading: 'Töltés...',
          rename: 'Átnevezés',
          newName: 'Válasz új nevet a szettnek',
          used: 'Használt',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          removeWorkNotis: 'Összes munkaértesítés elrejtése',
          compInv: 'Kattints a "mégse" gombra hogy csak az árverezhető tárgyakat mutassa\n vagy\nHozzáadd egy másik táska URL címét összehasonlításként',
          loginAll1: 'Összes világba bejelentkezés',
          loginAll2: 'Betölti az összes aktív világok egyetlen kattintással',
          custom1: 'Egyedi',
          custom2: 'Egyedi bejelentkezési listád',
          edit: 'Szerkesztés',
          saveMessage: 'Sikeres mentés',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Adventures',
            work: '*Work',
            duel: '*Duels',
            energy: '*Energy',
            skill: '*Skill points',
            fk: '*Fort battles',
            speed: '*Speed',
            lp: '*Health points',
            luckNmoney: '*Luck & money',
            motivation: '*Motivation',
            experience: '*Experience',
            special: '*Premium/special',
            events: '*Events',
            chests: '*Open & unpack',
            equipment: '-Equipment',
            products: '-Products',
            questitems: '-Quest items',
            craftitems: '-Craft items',
            recipes: '-Recipes',
            nothingFound: 'No items of this type found!',
          },
        },
        el: {
          language: 'Greek (ελληνικά)',
          ApiGui1: 'Αυτό το script περιέχει πολλά χαρακτηριστικά για να απλοποιήσετε την ζωή σας στο The West.<br>Περισσότερες πληροφορίες',
          ApiGui2: 'Ρυθμίσεις του script',
          FeatLogout: 'Προσθέστε ένα κουμπί αποσύνδεσης στη δεξιά πλευρά',
          FeatStatusbar: 'Αφαιρέστε τη γραμμή εργασιών',
          FeatShowAP: 'Εμφάνιση των συνολικών πόντων εργασίας στα παράθυρα εργασίας',
          FeatChangeCity: 'Βάλτε τον τίτλο πριν από το όνομα του παίκτη στην καρτέλα του Δημαρχείου',
          FeatDuellMap: 'Προσθήκη καρτέλας Duelmap στην καρτέλα μονομαχιών',
          FeatMarkDaily: 'Επισημάνετε το καθημερινό μπόνους σύνδεσης την 5η ημέρα για να μην το χάσετε',
          FeatMarketTown: 'Εμφάνιση ονόματος πόλης στο παράθυρο της αγοράς',
          FeatMarketMessage: 'Εμφάνιση μηνύματος όταν υπάρχουν αντικείμενα ή χρήματα στην αγορά της πόλης που μόλις ταξιδέψατε',
          FeatAchievHide: 'Απόκρυψη ολοκληρωμένων επιτευγμάτων στο παράθυρο επιτευγμάτων',
          FeatRecipeMarket: 'Βελτιώστε την αγορά συνταγών στην αγορά',
          FeatMoveJobs: 'Μετακινήστε την καρτέλα των τρέχουσων εργασιών λίγο προς τα αριστερά',
          FeatBlinkEvents: 'Σταματήστε την αναλαμπή των Εκδηλώσεων και του Λούνα Παρκ στην αριστερή πλευρά',
          FeatFortTracker: 'Απενεργοποιήστε την υπενθύμιση μάχης οχυρού',
          FeatFriendsPop: 'Απόκρυψη αναδυόμενων παραθύρων "Συνδεδεμένοι φίλοι"',
          FeatInstantQuest: 'Ολοκληρώστε μια αποστολή αμέσως αν πληρούνται όλες οι απαιτήσεις',
          FeatQuestWiki: 'Προσθήκη ενός κουμπιού στις αποστολές για την εμφάνισή τους στην σελίδα "Βοήθειας"',
          FeatCityTravel: 'Εμφάνιση του χρόνου ταξιδιού στις πόλεις του μαυροπίνακα',
          FeatBetterSheriff: 'Προσθήκη μιας νέας καρτέλας στο παράθυρο του "Σερίφη" για να δείτε όλες τις πιθανές επικυρήξεις',
          FeatChatProfessions: 'Προσθήκη του εικονιδίου επαγγέλματος των παικτών στη λίστα συνομιλίας (τσατ)',
          FeatQuestBookSearch: 'Αναζήτηση για επιλυμένες αποστολές στο βιβλίο αποστολών',
          FeatMarketRights: 'Προσθήκη εικονιδίου για το εάν οι προσφορές της αγοράς είναι δημόσιες ή μόνο για μέλη της συμμαχίας / πόλης',
          FeatEquipManagerPlus: 'Βελτιώστε τον υπεύθυνο εξοπλισμού στα αποθέματα',
          FeatShortPopups: 'Εμφάνιση μικρότερης περιγραφής αντικειμένων στα αποθέματα',
          FeatHideNotis: 'Προσθήκη ενός κουμπιού για την απόκρυψη των ειδοποιήσεων εργασίας στην αριστερή πλευρά',
          FeatJobProducts: 'Εμφανίστε στο αναδυόμενο παράθυρο εργασίας πόσα προϊόντα έχετε ήδη στα αποθέματά σας',
          FeatMapDistance: 'Εμφάνιση της απόστασης του ταξιδιού σας σε Μίλια',
          FeatTraderSell: 'Πώληση πολλαπλών αντικειμένων στον Έμπορο',
          FeatTouchControl: 'Enable touch control for map and scrollbar on your mobile',
          settings1: 'Ρυθμίσεις',
          settings2: 'Ανοίξτε τις ρυθμίσεις και το παράθυρο πληροφοριών',
          ghosttown1: 'Προς την Πόλη Φάντασμα ➔ ',
          ghosttown2: 'Άνοιγμα της Πόλης Φάντασμα',
          ghosttown3: 'Άνοιγμα και κεντράρισμα του χάρτη στην Πόλη Φάντασμα',
          indiantown1: 'Προς το Ινδιάνικο χωριό ➔ ',
          indiantown2: 'Άνοιγμα του Ινδιάνικου χωριού',
          indiantown3: 'Άνοιγμα και κεντράρισμα του χάρτη στο Ινδιάνικο χωριό',
          openmarket: 'Άνοιγμα της Αγοράς',
          forum: 'Άνοιγμα του Φόρουμ Πόλης',
          newsets: 'Νέα Σετ προσθέθηκαν στο script',
          chooseItems: 'Επιλέξτε τα αντικείμενα',
          remindHover: 'Λαμβάνετε μια ειδοποίηση όταν ένα αντικείμενο μπορεί να χρησιμοποιηθεί ξανά. Εδώ μπορείτε να επιλέξετε αυτά τα αντικείμενα.',
          remindReady: 'Έτοιμο για συλλογή',
          skipHover: 'Απενεργοποιήστε τα μηνύματα επιβεβαίωσης και τα αποτελέσματα όταν ανοίγετε κάποιες τσάντες. Εδώ μπορείτε να επιλέξετε αυτές τις τσάντες',
          skipDone: 'Παίρνετε',
          info: 'Πληροφορίες',
          contact: 'Επικοινωνία',
          chooseLang: 'Επιλογή γλώσσας',
          features: 'Χαρακτηριστικά',
          name: ' Όνομα παίκτη',
          save: 'Αποθήκευση',
          saveMessage2: 'Οι ρυθμίσεις αποθηκεύτηκαν. Ορισμένες αλλαγές χρειάζονται μια ανανέωση του παραθύρου του παιχνιδιού.',
          setbonus2: 'Πληροφορίες σχετικά με τα μπόνους των Σετ',
          frame2: 'Χρήσιμες ιστοσελίδες',
          choose: 'Κάντε κλικ στο καπέλο για να ξεκινήσετε',
          items: 'Αντικείμενα',
          parts: 'Τεμάχια',
          showItems: 'Εμφάνιση των αντικειμένων που υπάρχουν στα αποθέματά σας',
          noItems: 'Δεν βρέθηκαν αντικείμενα στα αποθέματά σας!',
          ownSets: 'Δικά σου Σετ',
          switchWeapon: 'Εναλλαγή μεταξύ πυροβόλου όπλου και ξίφους όπλου',
          selectBonus: 'Επιλέξτε Μπόνους',
          resetB: 'Επαναφορά',
          body: 'Ένδυση',
          right_arm: 'Όπλο μονομαχίας',
          animal: 'Άλογο & σέλα',
          rest: 'Άλλο',
          buff: 'Buffs',
          refresh: 'Ανανέωση',
          noFriends: 'Δεν υπάρχουν φίλοι',
          reward: 'Ανταμοιβή',
          allprofessions: 'Όλα τα επαγγέλματα',
          market1: 'Αντικείμενα στην Αγορά',
          market2: 'Υπάρχουν αντικείμενα / χρήματα σε αυτήν την αγορά. Τι θέλετε να σηκώσετε;',
          all: 'Όλα',
          onlyBids: 'Μόνο προσφορές',
          nothing: 'Τίποτα',
          worldwide: 'Οποιονδήποτε',
          alliance: 'Συμμαχία',
          town: 'Πόλη',
          level: 'Επίπεδο',
          duelLevel: ' Επίπεδο μονομαχίας ',
          exp: ' Εμπειρία ',
          distance: ' Απόσταση ',
          startduel: ' Μονομαχήστε ',
          centerMap: 'Κεντράρισμα στον χάρτη',
          popup: 'Το μπόνους δεξιοτήτων των αντιπάλων',
          damage: 'Ζημιά',
          duelmap: 'Χάρτης μονομαχιών',
          duelradius: 'Ακτίνα μονομαχιών',
          minutes: 'λεπτά',
          hour: '1 ώρα',
          hours: 'ώρες',
          searchOpp: 'Αναζήτηση για αντιπάλους',
          amount: 'Νεκρός/ή',
          not_dead_amount: 'Ζωντανός/ή',
          duellevel: 'Επίπεδο',
          status: 'Κατάσταση',
          sortBy: 'Ταξινόμηση κατά',
          tooLow: 'Χαμηλό επίπεδο μονομαχίας του αντιπάλου',
          tooHigh: 'Υψηλό επίπεδο μονομαχίας του αντιπάλου',
          ownTown: 'Μέλος της πόλης σου',
          attackable: 'Εμφάνιση μόνο παίκτες που μπορείτε να μονομαχήσετε',
          logout: 'Αποσύνδεση',
          accNfin: 'Αποδοχή & Ολοκλήρωση αποστολής',
          onWiki: 'Εμφάνισε την αποστολή στο Wiki',
          longerName: 'Το όνομα πρέπει να είναι μεγαλύτερο από 2 χαρακτήρες',
          loading: 'Φόρτωση...',
          rename: 'Μετονομασία',
          newName: 'Επιλέξτε ένα νέο όνομα Σετ',
          used: 'Χρησιμοποιείται',
          renameWarning: 'Όταν μετονομάζετε ένα Σετ, θα το φορέσετε και θα το ξαναβγάλετε.<br>Μπορεί να χάσετε κάποιους πόντους υγείας κατά τη διάρκεια της διαδικασίας!',
          sellItems: 'Πώληση αντικειμένων στον Έμπορο;',
          removeWorkNotis: 'Απόκρυψη όλων των ειδοποιήσεων εργασιών',
          compInv: 'Κάντε κλικ στην επιλογή "ακύρωση" για να προβάλλετε μόνο αντικείμενα που μπορούν να πουληθούν με πλειστηριασμό\n ή\nΠροσθέστε άλλη διεύθυνση URL αποθέματος για σύγκριση',
          loginAll1: 'Είσοδος σε όλους',
          loginAll2: 'Φορτώστε όλους τους ενεργούς κόσμους σας με ένα κλικ',
          custom1: 'Προσαρμοσμένο',
          custom2: 'Η προσαρμοσμένη λίστα σας σύνδεσης',
          edit: 'Επεξεργασία',
          saveMessage: 'Αποθηκεύτηκε με επιτυχία',
          CT: {
            ColorWindowTitle: 'Ρυθμίσεις',
            ColorWindowPreviewTxt: '*Κάντε κλικ στα γράμματα για να αλλάξετε χρώμα',
            ColorWindowOkBtn: 'Εφαρμογή',
            ColorWindowToDefaultBtn: 'Προεπιλογή',
            ColorWindowThisTchatBtn: 'Ορίστε σε αυτό',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Έντονα',
            ColorWindowCaps: 'Κεφαλαία',
            ColorWindowFlip: 'Ανάποδα',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Χωρίς χρώμα',
              'Καταχωρίστε έναν κωδικό χρώματος',
              'Κόκκινο',
              'Καφέ',
              'Μωβ',
              'Μπλε',
              'Πράσινο',
              'Ροζ',
              'Σκούρο μωβ',
              'Βιολετί',
              'Ξεθωριασμένο σκούρο μπλε',
              'Ανοιχτό πράσινο',
              'Υποβαθμισμένο κόκκινο',
              'Γαλάζιο',
              'Ξεθωριασμένο σκούρο ροζ',
              'Λαχανί',
              'Ξεθωριασμένο ροζ',
              'Φωτεινό κόκκινο'
            ],
            ColorLoadTitle: 'Κάντε κλικ για να τοποθετήσετε έναν άλλο κωδικό χρώματος<br>Ο τρέχων κωδικός χρώματος είναι: ',
            ColorSaveEmpty: '[Άδειο]',
            CustomReady: 'Έγκυρος κωδικός',
            CustomNotReady: 'Μη έγκυρος κωδικός',
          },
          QIS: {
            adventure: '*Περιπέτειες',
            work: '*Εργασίες',
            duel: '*Μονομαχίες',
            energy: '*Ενέργεια',
            skill: '*Πόντοι ικανοτήτων',
            fk: '*Μάχες οχυρών',
            speed: '*Ταχύτητα',
            lp: '*Πόντοι υγείας',
            luckNmoney: '*Τύχη & Χρήματα',
            motivation: '*Κίνητρο',
            experience: '*Εμπειρία',
            special: '*Premium/special',
            events: '*Εκδηλώσεις',
            chests: '*Θήκες & Κάτι για να ανοίξεις',
            equipment: '-Εξοπλισμός',
            products: '-Προϊόντα',
            questitems: '-Αντικείμενα αποστολών',
            craftitems: '-Αντικείμενα επαγγελμάτων',
            recipes: '-Συνταγές',
            nothingFound: 'Δεν βρέθηκαν αντικείμενα αυτού του τύπου!',
          },
        },
        pt: {
          language: 'Portuguese (português)',
          ApiGui1: 'Esse script foi feito para facilitar sua vida no Velho Oeste',
          ApiGui2: 'Abrir página do Script',
          FeatLogout: 'Adicionar botão de sair no fim dos scripts',
          FeatStatusbar: 'Remover a barra de tarefas',
          FeatShowAP: 'Mostrar seus pontos de habilidade na janela de trabalho.',
          FeatChangeCity: 'Mude o título e nome do jogador na cidade.',
          FeatDuellMap: 'Adicionar mapa de duelos na janela duelos.',
          FeatMarkDaily: 'Destacar bônus de login diário.',
          FeatMarketTown: 'Mostrar nome da cidade no mercado.',
          FeatMarketMessage: 'Receber notificação de itens comprados ou vendidos no mercado atual.',
          FeatAchievHide: 'Ocultar conquistas realizadas na janela de conquistas.',
          FeatRecipeMarket: 'Melhorar a compra de receitas no mercado.',
          FeatMoveJobs: 'Mover os trabalhos enfileirados a esquerda.',
          FeatBlinkEvents: 'Não piscar botões de evento ao lado esquerdo.',
          FeatFortTracker: 'Ocultar botão da batalha de forte.',
          FeatFriendsPop: 'Ocultar janela de amigos online.',
          FeatInstantQuest: 'Completar aventura instantâneamente quando tiver os requisitos.',
          FeatQuestWiki: 'Adicionar link para abrir a aventura no wiki.',
          FeatCityTravel: 'MOstrar o tempo de distância nas cidades do quadro.',
          FeatBetterSheriff: 'Adicionar aba no Xerife para ver todas as recompensas possíveis.',
          FeatChatProfessions: 'MOstrar a profissão dos jogadores na lista do chat.',
          FeatQuestBookSearch: 'Pesquisar por aventuras resolvidas no livro de aventuras',
          FeatMarketRights: 'Diferenciar itens no mercado entre cidade, aliança, e público.',
          FeatEquipManagerPlus: 'Mostre o gerenciamento de equipamento no inventário.',
          FeatShortPopups: 'Tornar janelas pop-up mais curtas.',
          FeatHideNotis: 'Adicionar botão para ocultar as notificações do trabalho ao lado esquerdo.',
          FeatJobProducts: 'Mostrar na janela de trabalho quantos produtos você já tem no inventário.',
          FeatMapDistance: ' Mostrar o número de milhas ao lado do tempo de viagem.',
          FeatTraderSell: 'Vender vários itens de uma só vez ao comerciante.',
          FeatTouchControl: 'Enable touch control for map and scrollbar on your mobile',
          settings1: 'Configurações',
          settings2: 'Configurações e Janela de Informações',
          ghosttown1: 'Ir para Cidade Fantasma ',
          ghosttown2: 'Abrir Cidade Fantasma',
          ghosttown3: 'Abrir Cidade Fantasma e Centralizar no Mapa',
          indiantown1: 'Ir para Vila Indígena ',
          indiantown2: 'Abrir Vila Ingígena',
          indiantown3: 'Abrir Vila Indígena e Centralizar no Mapa',
          openmarket: 'Mercado',
          forum: 'Fórum da Cidade',
          newsets: 'Novos Sets Adicionados ao Script',
          chooseItems: 'Escolha os Itens',
          remindHover: 'Receber notificação quando um item puder ser usado novamente.',
          remindReady: 'Pronto para recolher.',
          skipHover: 'Pular janelas de confirmação ao abrir algumas caixas e itens.',
          skipDone: 'Você ganhou:',
          info: 'Informação',
          contact: 'Contato:',
          chooseLang: 'Escolher Idioma',
          features: 'Características',
          name: 'Nome',
          save: 'Salvar',
          saveMessage2: 'Configurações salvas. Algumas mudanças só apareceram quando atualizar a janela.',
          setbonus2: 'Informações sobre o bônus do set',
          frame2: 'Páginas da Web Úteis',
          choose: 'Clique no Chapéu para começar.',
          items: 'Itens',
          parts: 'Partes',
          showItems: 'Mostrar os itens definidos no seu saco.',
          noItems: 'Nenhum item no seu inventário foi encontrado. Clique novamente com a tecla CTRL para mostrar no TW-Calc.',
          ownSets: 'Apenas possui conjuntos.',
          switchWeapon: 'Alternar entre arma de fogo e arma de vigor.',
          selectBonus: 'Selecionar bônus',
          resetB: 'Resetar',
          body: 'Roupas',
          right_arm: 'Armas',
          animal: 'Cavalo & Sela',
          rest: 'Outros',
          buff: 'Buffs',
          refresh: 'Atualizar',
          noFriends: 'Sem Amigos',
          reward: 'Recompensa',
          allprofessions: 'Todas as Profissões',
          market1: 'Itens no Mercado',
          market2: 'Há itens e dinheiro no mercado, o que você quer recolher?',
          all: 'Os dois',
          onlyBids: 'Apenas Lance',
          nothing: 'Nada',
          worldwide: 'No mundo todo',
          alliance: 'Aliança',
          town: 'Cidade',
          level: 'Nível',
          duelLevel: 'Nivel de Duelo',
          exp: 'Experiência',
          distance: 'Distância',
          startduel: 'Desafiar num Duelo',
          centerMap: 'Centralizar Mapa',
          popup: 'Bônus de Habilidade do Oponente',
          damage: 'Danificar',
          duelmap: 'Mapa de Duelo',
          duelradius: 'Raio de Duelo',
          minutes: 'Minutos',
          hour: '1 hora',
          hours: 'horas',
          searchOpp: 'Pesquisar Oponentes',
          amount: 'Morto',
          not_dead_amount: 'Vivo',
          duellevel: 'Nível',
          status: 'Status',
          sortBy: 'Ordenar por:',
          tooLow: 'Nível de duelo muito baixo.',
          tooHigh: 'Nível de duelo muito alto',
          ownTown: 'Membro da sua Cidade',
          attackable: 'Mostrar apenas jogadores atacáveis',
          logout: 'Sair',
          accNfin: 'Aceitar e completar quest.',
          onWiki: 'Abrir quest na janela wi-ki',
          longerName: 'O nome deve ter mais de 2 caracteres.',
          loading: 'Carregando...',
          rename: 'Renomear',
          newName: 'Escolha um novo nome de conjunto',
          used: 'Usado',
          renameWarning: 'Quando você renomeia um conjunto, você vai usá-lo e despir-lo novamente.<br>Você pode perder pontos de saúde durante o processo!',
          sellItems: 'Vender itens para o comerciante?',
          removeWorkNotis: 'Ocultar todas as notificações de Jobs',
          compInv: 'Clique em "cancelar" para mostrar apenas itens leiloáveis\n ou\nIntroduza outro URL de inventário para comparar',
          loginAll1: 'Login em todos os mundos',
          loginAll2: 'Carregue todos os seus mundos ativos em um clique',
          custom1: 'Personalizado',
          custom2: 'Sua lista de login persnalizada',
          edit: 'Editar',
          saveMessage: 'Salvo com sucesso!',
          CT: {
            ColorWindowTitle: 'Set Color tchat',
            ColorWindowPreviewTxt: '*Clique na letra de uma mudança de cor',
            ColorWindowOkBtn: 'Aplicar',
            ColorWindowToDefaultBtn: 'Definido como padrão',
            ColorWindowThisTchatBtn: 'Definido para este',
            ColorWindowDefaultText: 'Selecione o tchat para repor as predefinições: ',
            ColorWindowBold: 'Em negrito',
            ColorWindowCaps: 'Capitalizados',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Incolor',
              'Insira um código de cor',
              'vermelho',
              'marrom',
              'roxo',
              'azul',
              'verde',
              'cor de rosa',
              'magenta',
              'gradiente violeta',
              'gradiente azul escuro',
              'gradiente verde',
              'gradiente vermelho',
              'gradiente de luz azul',
              'Pink Gradient',
              'gradiente luz verde',
              'rosa Gradiente',
              'gradiente claro vermelho'
            ],
            ColorLoadTitle: 'Clique para carregar outro código de cor<br>O código de cores atual é: ',
            ColorSaveEmpty: '[vazio]',
            CustomReady: 'Código válido',
            CustomNotReady: 'Inválido',
          },
          QIS: {
            adventure: '*Aventuras',
            work: '*Buffs Trabalho',
            duel: '*Buffs Duelo',
            energy: '*Buffs Energia',
            skill: '*Buffs Habilidade',
            fk: '*Buffs Batalha',
            speed: '*Buffs Velocidade',
            lp: '*Buffs Saúde',
            luckNmoney: '*Sorte & Dinheiro',
            motivation: '*Motivação',
            experience: '*Experiência',
            special: '*Prêmio/especial',
            events: '*Eventos',
            chests: '*Abrir e desempacotar',
            equipment: '-Equipamento',
            products: '-Produtos',
            questitems: '-Items de aventura',
            craftitems: '-Ofício',
            recipes: '-Receitas',
            nothingFound: 'Nenhum item deste tipo encontrado!',
          },
        },
        it: {
          language: 'Italian (italiano)',
          ApiGui1: 'Questo script raccoglie molte funzionalità utili a semplificarti la vita in The West.<br>Ulteriori informazioni',
          ApiGui2: 'Apri la pagina dello script',
          FeatLogout: 'Aggiungi sul lato destro dello schermo un pulsante disconnetti',
          FeatStatusbar: 'Nascondi la barra degli incarichi',
          FeatShowAP: 'Mostra i tuoi attuali punti abilità nelle finestre dei lavori',
          FeatChangeCity: 'Nel municipio, inverti il titolo e il nome del giocatore',
          FeatDuellMap: 'Aggiungi la scheda Mappa duelli nella finestra Duelli',
          FeatMarkDaily: 'Evidenzia il bonus login del 5° giorno per non dimenticarlo',
          FeatMarketTown: 'Mostra il nome della città nella finestra del mercato',
          FeatMarketMessage: 'Ricevi una notifica quando ci sono oggetti o soldi da ritirare al mercato della città dove ti trovi in quel momento',
          FeatAchievHide: 'Nascondi i Successi completati nella rispettiva finestra di gioco',
          FeatRecipeMarket: 'Migliora l\'organizzazione delle ricette al mercato',
          FeatMoveJobs: 'Sposta la coda dei lavori leggermente più a sinistra',
          FeatBlinkEvents: 'Termina il lampeggiamento delle icone degli eventi e della fiera nella barra delle notifiche',
          FeatFortTracker: 'Disattiva l\'icona di notifica della battaglia al forte',
          FeatFriendsPop: 'Nascondi i pop-up "Amico online"',
          FeatInstantQuest: 'Se tutti i requisiti sono soddisfatti, permetti di concludere le missioni istantaneamente',
          FeatQuestWiki: 'Aggiungi un link alla wiki italiana (ove disponibile) nelle finestre delle missioni',
          FeatCityTravel: 'Mostra la distanza verso le città nella lavagna',
          FeatBetterSheriff: 'Aggiungi una nuova scheda nella finestra dello sceriffo per vedere tutte le possibili taglie',
          FeatChatProfessions: 'Mostra la professione a fianco del nome dei giocatori nella lista della chat',
          FeatQuestBookSearch: 'Aggiungi una casella di ricerca nella scheda "Completate" del libro missioni',
          FeatMarketRights: 'Mostra se le offerte del mercato sono pubbliche oppure per alleati\concittadini',
          FeatEquipManagerPlus: 'Migliora la finestra "Gestione equipaggiamento" nell\'inventario',
          FeatShortPopups: 'Rendi i tooltip degli oggetti più corti',
          FeatHideNotis: 'Aggiungi un pulsante per nascondere le notifiche dei lavori nella relativa barra',
          FeatJobProducts: 'Nel tooltip dei prodotti mostra quanti se ne possiede in inventario',
          FeatMapDistance: 'Mostra la distanza in miglia accanto al tempo di viaggio',
          FeatTraderSell: 'Consenti di vendere oggetti in quantità multipla ai negozi\mercante ambulante',
          FeatTouchControl: 'Abilità il controllo touch nel browser mobile',
          settings1: 'Apri le impostazioni',
          settings2: 'Apri le impostazioni e la finestra di informazioni',
          ghosttown1: 'Vai alla Città fantasma',
          ghosttown2: 'Apri la Città Fantasma',
          ghosttown3: 'Apri la Città Fantasma e centra la mappa',
          indiantown1: 'Vai al Villaggio Indiano',
          indiantown2: 'Apri il Villaggio Indiano',
          indiantown3: 'Apri il Villaggio Indiano e centra la mappa',
          openmarket: 'Apri il mercato',
          forum: 'Apri il forum città',
          newsets: 'Nuovi set sono stati aggiunti allo script',
          chooseItems: 'Scegli gli oggetti',
          remindHover: 'Ricevi una notifica quando un oggetto può essere di nuovo utilizzato. Scegli qui gli oggetti di interesse.',
          remindReady: 'Pronto per essere collezionato',
          skipHover: 'Salta i messaggi di conferma e risultato quando apri alcuni oggetti. Scegli qui gli oggetti di interesse',
          skipDone: 'Ottieni',
          info: 'Informazioni',
          contact: 'Contatti',
          chooseLang: 'Scegli lingua',
          features: 'Caratteristiche',
          name: 'Nome',
          save: 'Salva',
          saveMessage2: 'Impostazioni salvate. Aggiorna la pagina per renderle effettive.',
          setbonus2: 'Informazioni sui bonus set',
          frame2: 'Pagine internet di aiuto',
          choose: 'Clicca sul cappello per iniziare',
          items: 'oggetti',
          parts: 'parti',
          showItems: 'Mostra i set oggetti nel tuo inventario',
          noItems: 'Nessun oggetto trovato nel tuo inventario. Cliccaci nuovamente tenendo premuto CTRL per mostrarlo su TW-Calc.',
          ownSets: 'Solo propri set',
          switchWeapon: 'Inverti armi da fuoco e da contusione',
          selectBonus: 'Scegli i bonus',
          resetB: 'Reset',
          body: 'Abiti',
          right_arm: 'Armi',
          animal: 'Cavallo e oggetto',
          rest: 'Altro',
          buff: 'Buffs',
          refresh: 'Aggiorna',
          noFriends: 'Nessun amico',
          reward: 'Ricompensa',
          allprofessions: 'Tutte le professioni',
          market1: 'Oggetti al mercato',
          market2: 'Ci sono oggetti/soldi da ritirare in questo mercato. Vuoi farlo?',
          all: 'Tutto',
          onlyBids: 'Solo aste',
          nothing: 'Niente',
          worldwide: 'Mondiale',
          alliance: 'Alleanza',
          town: 'Città',
          level: 'Livello',
          duelLevel: 'Livello duello',
          exp: 'Esperienza',
          distance: 'Distanza',
          startduel: 'Inizia duello',
          centerMap: 'Centra mappa',
          popup: 'Abilità bonus dell\'avversario',
          damage: 'Danno',
          duelmap: 'Mappa duelli',
          duelradius: 'Raggio duelli',
          minutes: 'minuti',
          hour: '1 ora',
          hours: 'ore',
          searchOpp: 'Cerca avversari',
          amount: 'Morto',
          not_dead_amount: 'Vivo',
          duellevel: 'Liv',
          status: 'Stato',
          sortBy: 'Ordina per',
          tooLow: 'Livello duello avversario troppo basso',
          tooHigh: 'Livello duello avversario troppo alto',
          ownTown: 'Membro della tua città',
          attackable: 'Mostra solo i giocatori duellabili',
          logout: 'Disconneti',
          accNfin: 'Accetta e completa missione',
          onWiki: 'Mostra la missione nella Wiki',
          longerName: 'Il nome deve essere più lungo di 2 caratteri',
          loading: 'Caricamento...',
          rename: 'Rinomina',
          newName: 'Scegli un nuovo nome set',
          used: 'Usato',
          renameWarning: 'Quando rinomini un set lo indosserai e svestirai di nuovo.<br>In questo processo potresti perdere dei punti vita!',
          sellItems: 'Vuoi vendere questi oggetti?',
          removeWorkNotis: 'Nascondi tutte le notifiche dei lavori',
          compInv: 'Clicca su "cancella" per mostrare solo gli oggetti vendibili all\'asta\n oppure\nInserisci altro URL di inventari per confrontare',
          loginAll1: 'Fai login in tutti i mondi',
          loginAll2: 'Carica tutti i mondi in cui sei attivo con un clic',
          custom1: 'Personalizza',
          custom2: 'La tua lista login personalizzata',
          edit: 'Modifica',
          saveMessage: 'Salvato con successo',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Avventure',
            work: '*Bonus Lavoro',
            duel: '*Bonus Duello',
            energy: '*Bonus Energia',
            skill: '*Bonus Abilità',
            fk: '*Bonus Forte',
            speed: '*Bonus Velocità',
            lp: '*Bonus Punti Vita',
            luckNmoney: '*Luck & money',
            motivation: '*Motivation',
            experience: '*Experience',
            special: '*Premio/speciale',
            events: '*Eventi',
            chests: '*Aprire e decomprimere',
            equipment: '-Attrezzatura',
            products: '-Prodotti',
            questitems: '-Oggetti missione',
            craftitems: '-Produci',
            recipes: '-Ricette',
            nothingFound: 'Non è stato trovato nulla!',
          },
        },
        fr: {
          language: 'French (français)',
          ApiGui1: 'This script contains many features to simplify your everyday life in The West.<br>More Informations',
          ApiGui2: 'Open script page',
          FeatLogout: 'Add a logout button on the right side',
          FeatStatusbar: 'Remove the taskbar',
          FeatShowAP: 'Show your actual skill points in job windows',
          FeatChangeCity: 'Switch title and player name in the town hall',
          FeatDuellMap: 'Add Duelmap tab in duel window',
          FeatMarkDaily: 'Highlight daily login bonus on day 5 to not miss it',
          FeatMarketTown: 'Show town name in market window',
          FeatMarketMessage: 'Get a message when there are items or money to pick up on actual market',
          FeatAchievHide: 'Hide completed achievements in achievements window',
          FeatRecipeMarket: 'Improve the purchase of recipes on market',
          FeatMoveJobs: 'Move the queued jobs a bit to the left',
          FeatBlinkEvents: 'Stop the blinking of the event, County Fair buttons on the left side',
          FeatFortTracker: 'Turn off fort battle reminder',
          FeatFriendsPop: 'Hide "Friend online" pop-ups',
          FeatInstantQuest: 'Complete the quest instantly if all requirements are done',
          FeatQuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
          FeatCityTravel: 'Show the travel time to the towns in the blackboard',
          FeatBetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
          FeatChatProfessions: 'Show the crafting profession of the players in the chat list',
          FeatQuestBookSearch: 'Search for solved quests in the quest book',
          FeatMarketRights: 'Show if market offers are public or only for alliance/town members',
          FeatEquipManagerPlus: 'Improve the equipment manager in the inventory',
          FeatShortPopups: 'Make the item pop-ups shorter',
          FeatHideNotis: 'Add a button to hide the job notifications on the left side',
          FeatJobProducts: 'Show in the job pop-up how many products you already have in your inventory',
          FeatMapDistance: ' Show the number of miles next to the travel time',
          FeatTraderSell: 'Sell multiple items at once to the trader',
          FeatTouchControl: 'Enable touch control on your mobile browser',
          settings1: 'Open settings',
          settings2: 'Open settings and information window',
          ghosttown1: 'Go to ghost town ',
          ghosttown2: 'Open ghost town',
          ghosttown3: 'Open ghost town and center it on map',
          indiantown1: 'Go to Indian village ',
          indiantown2: 'Open Indian village',
          indiantown3: 'Open Indian village and center it on map',
          openmarket: 'Open market',
          forum: 'Open town forum',
          newsets: 'New sets are added to the script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Info',
          contact: 'Contact',
          chooseLang: 'Choose language',
          features: 'Features',
          name: 'Name',
          save: 'Save',
          saveMessage2: 'Settings saved. Some changes need a refresh of the game window.',
          setbonus2: 'Informations about the set bonuses',
          frame2: 'Helpful web pages',
          choose: 'Click on the hat to get started',
          items: 'items',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          rest: 'Other',
          buff: 'Buffs',
          refresh: 'Refresh',
          noFriends: 'No Friends',
          reward: 'Reward',
          allprofessions: 'All Professions',
          market1: 'Items on market',
          market2: 'There are items/money on this market. What do you want to pick up?',
          all: 'All',
          onlyBids: 'Only bids',
          nothing: 'Nothing',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Town',
          level: 'Level',
          duelLevel: 'Duelling level',
          exp: 'Exp',
          distance: 'Distance',
          startduel: 'Start Duel',
          centerMap: 'Center map',
          popup: 'The opponent\'s skill bonus',
          damage: 'Damage',
          duelmap: 'Duelmap',
          duelradius: 'Duel radius',
          minutes: 'minutes',
          hour: '1 hour',
          hours: 'hours',
          searchOpp: 'Search for opponents',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          status: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          logout: 'Logout',
          accNfin: 'Accept & complete quest',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Load all your active worlds with one click',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          saveMessage: 'Saved successfully',
          CT: {
            ColorWindowTitle: 'Configurer Color tchat',
            ColorWindowPreviewTxt: '*Clickez sur la lettre à changer de couleur',
            ColorWindowOkBtn: 'Appliquer',
            ColorWindowToDefaultBtn: 'Par défaut',
            ColorWindowThisTchatBtn: 'Pour se tchat',
            ColorWindowDefaultText: 'Sélectionnez les tchat à Remettre par défaut:',
            ColorWindowBold: 'En gras',
            ColorWindowCaps: 'En majuscule',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Sans couleur',
              'Entrer des couleurs',
              'rouge',
              'marron',
              'violet',
              'bleu',
              'vert',
              'rose',
              'magenta',
              'dégradé violet',
              'dégradé bleu foncé',
              'dégradé vert',
              'dégradé rouge',
              'dégradé bleu clair',
              'dégradé rose',
              'dégradé vert clair',
              'dégradé rose clair',
              'dégradé rouge clair'
            ],
            ColorLoadTitle: 'Clickez pour charger un autre code couleur<br>Le code couleur actuel est: ',
            ColorSaveEmpty: '[vide]',
            CustomReady: 'Code valide',
            CustomNotReady: 'Non valide',
          },
          QIS: {
            adventure: '*Aventures',
            work: '*Travail',
            duel: '*Duels',
            energy: '*Bonus de repos',
            skill: '*Aptitudes',
            fk: '*Fort bataille',
            speed: '*Vitesse',
            lp: '*Points de vie bonus',
            luckNmoney: '*Luck & money',
            motivation: '*Motivation',
            experience: '*Experience',
            special: '*Prime/spéciale',
            events: '*Événements',
            chests: '*Ouvrir et déballer',
            equipment: '-Équipement',
            products: '-Produits',
            questitems: '-Objets de quête',
            craftitems: '-Artisanat',
            recipes: '-Recettes',
            nothingFound: 'Pas d\'objets de cette sorte trouvé!',
          },
        },
        cs: {
          language: 'English',
          ApiGui1: 'This script contains many features to simplify your everyday life in The West.<br>More Informations',
          ApiGui2: 'Open script page',
          FeatLogout: 'Add a logout button on the right side',
          FeatStatusbar: 'Remove the taskbar',
          FeatShowAP: 'Show your actual skill points in job windows',
          FeatChangeCity: 'Switch title and player name in the town hall',
          FeatDuellMap: 'Add Duelmap tab in duel window',
          FeatMarkDaily: 'Highlight daily login bonus on day 5 to not miss it',
          FeatMarketTown: 'Show town name in market window',
          FeatMarketMessage: 'Get a message when there are items or money to pick up on actual market',
          FeatAchievHide: 'Hide completed achievements in achievements window',
          FeatRecipeMarket: 'Improve the purchase of recipes on market',
          FeatMoveJobs: 'Move the queued jobs a bit to the left',
          FeatBlinkEvents: 'Stop the blinking of the event, County Fair buttons on the left side',
          FeatFortTracker: 'Turn off fort battle reminder',
          FeatFriendsPop: 'Hide "Friend online" pop-ups',
          FeatInstantQuest: 'Complete the quest instantly if all requirements are done',
          FeatQuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
          FeatCityTravel: 'Show the travel time to the towns in the blackboard',
          FeatBetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
          FeatChatProfessions: 'Show the crafting profession of the players in the chat list',
          FeatQuestBookSearch: 'Search for solved quests in the quest book',
          FeatMarketRights: 'Show if market offers are public or only for alliance/town members',
          FeatEquipManagerPlus: 'Improve the equipment manager in the inventory',
          FeatShortPopups: 'Make the item pop-ups shorter',
          FeatHideNotis: 'Add a button to hide the job notifications on the left side',
          FeatJobProducts: 'Show in the job pop-up how many products you already have in your inventory',
          FeatMapDistance: ' Show the number of miles next to the travel time',
          FeatTraderSell: 'Sell multiple items at once to the trader',
          FeatTouchControl: 'Enable touch control on your mobile browser',
          settings1: 'Open settings',
          settings2: 'Open settings and information window',
          ghosttown1: 'Go to ghost town ',
          ghosttown2: 'Open ghost town',
          ghosttown3: 'Open ghost town and center it on map',
          indiantown1: 'Go to Indian village ',
          indiantown2: 'Open Indian village',
          indiantown3: 'Open Indian village and center it on map',
          openmarket: 'Open market',
          forum: 'Open town forum',
          newsets: 'New sets are added to the script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Info',
          contact: 'Contact',
          chooseLang: 'Choose language',
          features: 'Features',
          name: 'Name',
          save: 'Save',
          saveMessage2: 'Settings saved. Some changes need a refresh of the game window.',
          setbonus2: 'Informations about the set bonuses',
          frame2: 'Helpful web pages',
          choose: 'Click on the hat to get started',
          items: 'items',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          rest: 'Other',
          buff: 'Buffs',
          refresh: 'Refresh',
          noFriends: 'No Friends',
          reward: 'Reward',
          allprofessions: 'All Professions',
          market1: 'Items on market',
          market2: 'There are items/money on this market. What do you want to pick up?',
          all: 'All',
          onlyBids: 'Only bids',
          nothing: 'Nothing',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Town',
          level: 'Level',
          duelLevel: 'Duelling level',
          exp: 'Exp',
          distance: 'Distance',
          startduel: 'Start Duel',
          centerMap: 'Center map',
          popup: 'The opponent\'s skill bonus',
          damage: 'Damage',
          duelmap: 'Duelmap',
          duelradius: 'Duel radius',
          minutes: 'minutes',
          hour: '1 hour',
          hours: 'hours',
          searchOpp: 'Search for opponents',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          status: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          logout: 'Logout',
          accNfin: 'Accept & complete quest',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Load all your active worlds with one click',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          saveMessage: 'Saved successfully',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Dobrodružství',
            work: '*Pracovní body',
            duel: '*Duely',
            energy: '*Energie',
            skill: '*Body schopností',
            fk: '*Bitvy',
            speed: '*Rychlost',
            lp: '*Body zdraví',
            luckNmoney: '*Štěstí & zárobek',
            motivation: '*Motivace',
            experience: '*Zkušenosti',
            special: '*Prémium/špeciální',
            events: '*Eventy',
            chests: '*Něco k otevření',
            equipment: '-Vybavení',
            products: '-Produkty',
            questitems: '-Předměty k úkolu',
            craftitems: '-Předměty z remesel',
            recipes: '-Recepty',
            nothingFound: 'Nebyly nalezeny žádné položky tohoto typu!',
          },
        },
        sk: {
          language: 'English',
          ApiGui1: 'This script contains many features to simplify your everyday life in The West.<br>More Informations',
          ApiGui2: 'Open script page',
          FeatLogout: 'Add a logout button on the right side',
          FeatStatusbar: 'Remove the taskbar',
          FeatShowAP: 'Show your actual skill points in job windows',
          FeatChangeCity: 'Switch title and player name in the town hall',
          FeatDuellMap: 'Add Duelmap tab in duel window',
          FeatMarkDaily: 'Highlight daily login bonus on day 5 to not miss it',
          FeatMarketTown: 'Show town name in market window',
          FeatMarketMessage: 'Get a message when there are items or money to pick up on actual market',
          FeatAchievHide: 'Hide completed achievements in achievements window',
          FeatRecipeMarket: 'Improve the purchase of recipes on market',
          FeatMoveJobs: 'Move the queued jobs a bit to the left',
          FeatBlinkEvents: 'Stop the blinking of the event, County Fair buttons on the left side',
          FeatFortTracker: 'Turn off fort battle reminder',
          FeatFriendsPop: 'Hide "Friend online" pop-ups',
          FeatInstantQuest: 'Complete the quest instantly if all requirements are done',
          FeatQuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
          FeatCityTravel: 'Show the travel time to the towns in the blackboard',
          FeatBetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
          FeatChatProfessions: 'Show the crafting profession of the players in the chat list',
          FeatQuestBookSearch: 'Search for solved quests in the quest book',
          FeatMarketRights: 'Show if market offers are public or only for alliance/town members',
          FeatEquipManagerPlus: 'Improve the equipment manager in the inventory',
          FeatShortPopups: 'Make the item pop-ups shorter',
          FeatHideNotis: 'Add a button to hide the job notifications on the left side',
          FeatJobProducts: 'Show in the job pop-up how many products you already have in your inventory',
          FeatMapDistance: ' Show the number of miles next to the travel time',
          FeatTraderSell: 'Sell multiple items at once to the trader',
          FeatTouchControl: 'Enable touch control on your mobile browser',
          settings1: 'Open settings',
          settings2: 'Open settings and information window',
          ghosttown1: 'Go to ghost town ',
          ghosttown2: 'Open ghost town',
          ghosttown3: 'Open ghost town and center it on map',
          indiantown1: 'Go to Indian village ',
          indiantown2: 'Open Indian village',
          indiantown3: 'Open Indian village and center it on map',
          openmarket: 'Open market',
          forum: 'Open town forum',
          newsets: 'New sets are added to the script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Info',
          contact: 'Contact',
          chooseLang: 'Choose language',
          features: 'Features',
          name: 'Name',
          save: 'Save',
          saveMessage2: 'Settings saved. Some changes need a refresh of the game window.',
          setbonus2: 'Informations about the set bonuses',
          frame2: 'Helpful web pages',
          choose: 'Click on the hat to get started',
          items: 'items',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          rest: 'Other',
          buff: 'Buffs',
          refresh: 'Refresh',
          noFriends: 'No Friends',
          reward: 'Reward',
          allprofessions: 'All Professions',
          market1: 'Items on market',
          market2: 'There are items/money on this market. What do you want to pick up?',
          all: 'All',
          onlyBids: 'Only bids',
          nothing: 'Nothing',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Town',
          level: 'Level',
          duelLevel: 'Duelling level',
          exp: 'Exp',
          distance: 'Distance',
          startduel: 'Start Duel',
          centerMap: 'Center map',
          popup: 'The opponent\'s skill bonus',
          damage: 'Damage',
          duelmap: 'Duelmap',
          duelradius: 'Duel radius',
          minutes: 'minutes',
          hour: '1 hour',
          hours: 'hours',
          searchOpp: 'Search for opponents',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          status: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          logout: 'Logout',
          accNfin: 'Accept & complete quest',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Load all your active worlds with one click',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          saveMessage: 'Saved successfully',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Dobrodružstvá',
            work: '*Práca',
            duel: '*Duely',
            energy: '*Energia',
            skill: '*Schopnosti',
            fk: '*Boje',
            speed: '*Rýchlosť',
            lp: '*Zdravie',
            luckNmoney: '*Šťastie & zárobok',
            motivation: '*Motivácia',
            experience: '*Skúsenosti',
            special: '*Prémium/špeciálne',
            events: '*Eventy',
            chests: '*Tašky a truhly',
            equipment: '-Výbava',
            products: '-Produkty',
            questitems: '-Predmety na úlohy',
            craftitems: '-Predmety z remesiel',
            recipes: '-Recepty',
            nothingFound: 'Neboli nájdené žiadne položky tohto typu!',
          },
        },
      },
      url: 'https://tomrobert.safe-ws.de/',
      Images: function (img, file) {
        return this.url + img + (file ? '.jpg' : '.png');
      },
    };
    if (location.href.includes('game.php')) {
      TWX = {
        name: 'TW Essentials',
        author: 'Leotas (updated by Tom Robert)',
        minGame: '2.0',
        maxGame: Game.version.toString(),
        updateUrl: TWXstart.url + 'sUp.js',
        SPEC: [
          'speed', 'luck', 'dollar', 'experience', 'regen', 'drop',
        ],
        list: null,
        currSetBonus: 0,
        currBonusSearch: '',
        lvlToggle: 0,
        setAbc: false,
        onlyOwnSets: false,
        chooseBonus: {
          subWeapon: 'hand'
        },
        Data: {},
        loaded: [],
        Features: {
          Logout: false,
          Statusbar: false,
          ShowAP: false,
          ChangeCity: false,
          DuellMap: true,
          MarkDaily: true,
          MarketMessage: true,
          MarketTown: true,
          AchievHide: true,
          RecipeMarket: true,
          MoveJobs: true,
          BlinkEvents: false,
          FortTracker: false,
          FriendsPop: false,
          InstantQuest: true,
          QuestWiki: true,
          CityTravel: true,
          BetterSheriff: true,
          ChatProfessions: true,
          QuestBookSearch: true,
          MarketRights: true,
          EquipManagerPlus: true,
          ShortPopups: true,
          HideNotis: true,
          JobProducts: true,
          MapDistance: true,
          TraderSell: true,
          TouchControl: true,
          ColorTchat: true,
          QuickItemsSearch: true,
        },
        CT: {},
        QIS: {},
        cooldown: {
          2482: 1,
          2484: 1,
          2485: 1,
          2557: 1,
          2558: 1,
          2665: 1,
          2666: 1,
          2698: 1,
          50691: 1,
          51482: 1,
          51483: 1,
        },
        cooldownTimer: {},
        cooldownSetTime: function (y, res, sec) {
          TWX.cooldownTimer[y] = setTimeout(function () {
              var imgs = $('<span></span>');
              for (var z = 0; z < res.length; z++) {
                var itemDiv = new tw2widget.JobItem(res[z].obj).getMainDiv();
                imgs.append(itemDiv);
              }
              var cooldownMsg = new west.gui.Dialog(TWXlang.remindReady, imgs, 'ok').addButton('ok', function () {
                  Wear.open();
                  Inventory.showSearchResult(res);
                  cooldownMsg.hide();
                  TWX.cooldownTimer[y] = 0;
                }).addButton('cancel').show();
            }, sec);
        },
        skipOpen: {
          1975: 1,
          2561: 0.5,
          2562: 0.5,
          2675: 0.5,
        },
        addStyle: function (css) {
          var style = document.createElement('style');
          style.type = 'text/css';
          style.innerHTML = css;
          document.body.appendChild(style);
        },
        updateLang: function () {
          var lg = TWXstart.langs;
          TWX.lang = lg[localStorage.getItem('scriptsLang')] ? localStorage.getItem('scriptsLang') : lg[Game.locale.substr(0, 2)] ? Game.locale.substr(0, 2) : 'en';
          TWXlang = lg[TWX.lang];
        },
      };
      TWX.updateLang();
      TWX.Skript = {
        fmfb: function () {
          var fms = [['de', 'deutsches Forum'], ['net', 'English forum'], ['pl', 'forum polski'], ['es', 'foro español'], ['ru', 'Русский форум'], ['fr', 'forum français'], ['it', 'forum italiano'], ['net', 'beta forum', 'beta.']],
          add = '<h1>' + TWXlang.contact + '</h1><ul style="margin-left:15px;line-height:18px;"><li>Send a message to <a target=\'_blank\' href="https://www.the-west.de/?ref=west_invite_linkrl&player_id=647936&world_id=13&hash=7dda">Tom Robert on German world Arizona</a></li><li>Contact me on <a target=\'_blank\' href="https://greasyfork.org/forum/messages/add/Tom Robert">Greasy Fork</a></li><li>Message me on one of these The West Forum:<br>';
          for (var l of fms)
            add += '/ <a target=\'_blank\' href="https://forum.' + (l[2] || '') + 'the-west.' + l[0] + '/index.php?conversations/add&to=Tom Robert">' + l[1] + '</a> ' + (l[0] == 'es' ? '<br>' : '');
          return add + '/<br>I will get an e-mail when you sent me the message <img src="images/chat/emoticons/smile.png"></li></ul>';
        },
        init: function () {
          TheWestApi.register('TWX', TWX.name, TWX.minGame, TWX.maxGame, TWX.author, TWX.website).setGui('<h1>' + TWXlang.info + '</h1><i>Language: </i>' + TWXlang.language + '<br><br>' + TWXlang.ApiGui1 + ': <a href="javascript:TWX.GUI.open(\'openFeatures\');TWX.GUI.makeList();">' + TWXlang.ApiGui2 + '</a><br><br><i>' + TWX.name + ' v' + TWXstart.version + '</i><br><br>' + this.fmfb());
          var menuContainer = $('<div id="TWX-menu" class="menulink" onclick="TWX.GUI.openSelectbox();" title="' + TWX.name + '" />').css('background-image', 'url(' + TWXstart.Images('LT_settings') + ')').css('background-position', '0px 0px').mouseenter(function () {
              $(this).css('background-position', '-25px 0px');
            }).mouseleave(function () {
              $(this).css('background-position', '0px 0px');
            });
          $('#ui_menubar').append($('<div class="ui_menucontainer" />').append(menuContainer).append('<div class="menucontainer_bottom" />'));
          TWX.Skript.updateFeat();
          TWX.SkipOpen();
        },
        updateFeat: function () {
          var saved = localStorage.getItem('TWLT');
          TWX.Data = saved && saved.indexOf('{') === 0 && JSON.parse(saved) || {};
          for (var k in TWX.Features) {
            if (TWX.Skript.getFeature(k) && !TWX.loaded.includes(k)) {
              try {
                TWX.loaded.push(k);
                TWX[k].init();
              } catch (e) {}
            }
          }
          TWX.CollectReminder();
        },
        getFeature: function (name) {
          return (TWX.Data[name] !== undefined) ? TWX.Data[name] : TWX.Features[name];
        },
      };
      Map.getLastQueuePosition = function () {
        var posx = Character.position.x;
        var posy = Character.position.y;
        if (TaskQueue.queue.length >= 1) {
          var data = TaskQueue.queue[TaskQueue.queue.length - 1].wayData;
          if (data.x) {
            posx = data.x;
            posy = data.y;
          }
        }
        return {
          x: posx,
          y: posy
        };
      };
      var EvName = Object.keys(Game.sesData)[0],
      set1 = west.storage.ItemSetManager._setList,
      replUml = function (str) {
        return str.toUpperCase().replace(/"/g, '').replace(/Á/g, 'A').replace(/É/g, 'E').replace(/Ő/g, 'O').replace(/Ú|Ü|Ű/g, 'U').replace(/Ś/g, 'S');
      };
      if (EvName)
        var sendGift = Game.sesData[EvName].friendsbar;
      TWX.GUI = {
        openSelectbox: function () {
          TWX.GUI.makeList();
          var selectbox = new west.gui.Selectbox();
          $(selectbox.getMainDiv()).append('<div class="TWXselbox"/>');
          selectbox.setHeader(TWX.name);
          selectbox.setWidth(300);
          selectbox.addItem(0, TWXlang.settings1, TWXlang.settings2);
          selectbox.addItem(1, 'SetBonus', TWXlang.setbonus2);
          selectbox.addItem(2, 'BonusSearch', TWXlang.setbonus2);
          selectbox.addItem(3, 'WebCenter', TWXlang.frame2);
          selectbox.addItem(4, TWXlang.ghosttown1 + Map.calcWayTime(Map.getLastQueuePosition(), {
              x: 1728,
              y: 2081
            }).formatDuration(), TWXlang.ghosttown1);
          selectbox.addItem(5, TWXlang.ghosttown2, TWXlang.ghosttown3);
          selectbox.addItem(6, TWXlang.indiantown1 + Map.calcWayTime(Map.getLastQueuePosition(), {
              x: 28002,
              y: 16658
            }).formatDuration(), TWXlang.indiantown1);
          selectbox.addItem(7, TWXlang.indiantown2, TWXlang.indiantown3);
          selectbox.addItem(8, TWXlang.openmarket, TWXlang.openmarket);
          selectbox.addItem(9, TWXlang.forum, TWXlang.forum);
          if (EvName) {
            selectbox.addItem(10, '<div style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;"><b>' + sendGift.label + '</b></div>', sendGift.label);
          }
          selectbox.addListener(function (e) {
            switch (e) {
            case 0:
              TWX.GUI.open('openFeatures');
              break;
            case 1:
              TWX.GUI.open('openSetsWindow', 0, 'SetBonus');
              break;
            case 2:
              TWX.GUI.open('openSetsWindow', 0, 'BonusSearch');
              break;
            case 3:
              TWX.GUI.open('openFrame');
              break;
            case 4:
              QuestEmployerWindow.startWalk({
                key: 'ghosttown',
                x: '1728',
                y: '2081'
              });
              break;
            case 5:
              Map.center(1728, 2081);
              QuestEmployerWindow.showEmployer('ghosttown', '1728', '2081');
              break;
            case 6:
              QuestEmployerWindow.startWalk({
                key: 'indianvillage',
                x: '28002',
                y: '16658'
              });
              break;
            case 7:
              Map.center(28002, 16658);
              QuestEmployerWindow.showEmployer('indianvillage', '28002', '16658');
              break;
            case 8:
              MarketWindow.open(Character.homeTown.town_id);
              break;
            case 9:
              ForumWindow.open();
              break;
            case 10:
              TWX.GUI.open('openSender');
              break;
            }
          });
          var pos = $('div#TWX-menu').offset();
          pos = {
            clientX: pos.left,
            clientY: pos.top
          };
          selectbox.show(pos);
        },
        window: {},
        checkbox: {},
        open: function (tab, data, id) {
          TWX.GUI.window = wman.open('TWX', TWX.name, 'noreload').setMiniTitle(TWX.name).setMaxSize(1268, 838).addTab(TWXlang.features, 'TWXFeatures', TWX.GUI.openFeatures).addTab('SetBonus', 'SetBonus', TWX.GUI.openSetsWindow).addTab('BonusSearch', 'BonusSearch', TWX.GUI.openSetsWindow).addTab('WebCenter', 'TWXFrame', TWX.GUI.openFrame);
          if (EvName)
            TWX.GUI.window.addTab('Event', 'TWXSender', TWX.GUI.openSender);
          TWX.GUI[tab](data, id);
          $('.tw2gui_window_inset', TWX.GUI.window.getMainDiv()).css('background-image', 'url(' + TWXstart.Images('LT_backGr', 1) + ')');
        },
        getDefault: function (tab) {
          TWX.GUI.window.setResizeable(false).setSize(748, 471).clearContentPane().removeClass('nocloseall').setTitle('The West - Essentials');
          TWX.GUI.window.dontCloseAll = false;
          $(TWX.GUI.window.getContentPane()).css('margin-top', '0px');
          var wnd = TWX.GUI.window.getMainDiv();
          $('.textart_title', wnd).css('display', '');
          TWX.GUI.window.activateTab(tab);
        },
        openFeatures: function () {
          TWX.GUI.getDefault('TWXFeatures');
          var featScroll = new west.gui.Scrollpane().appendContent('<h2>' + TWXlang.chooseLang + '</h2>'),
          langBox = new west.gui.Combobox().appendTo(featScroll.getContentPane());
          for (var j in TWXstart.langs)
            langBox.addItem(j, TWXstart.langs[j].language);
          langBox.select(TWX.lang);
          TWX.cdTemp = TWX.Data.cooldown ? $.extend({}, TWX.Data.cooldown) : $.extend({}, TWX.cooldown);
          $('<span title="' + TWXlang.remindHover + '" style="background-image: url(images/items/yield/low_heart_container.png); cursor: pointer; position: absolute; height: 73px; width: 73px; right: 0px; top: 0px;"/>').appendTo(featScroll.getContentPane()).click(function () {
            var cont = $('<span>');
            for (var x in TWX.cooldown) {
              var productDiv = new tw2widget.JobItem(ItemManager.getByBaseId(x)).getMainDiv();
              $(productDiv).css('opacity', TWX.cdTemp[x] || TWX.cooldown[x]).attr('onclick', 'TWX.cdTemp[' + x + ']=$(this).css("opacity")==1?0.5:1;$(this).css("opacity",TWX.cdTemp[' + x + ']);');
              cont.append(productDiv);
            }
            new west.gui.Dialog(TWXlang.chooseItems, cont).addButton('ok').show();
          });
          TWX.skipTemp = TWX.Data.skipOpen ? $.extend({}, TWX.Data.skipOpen) : $.extend({}, TWX.skipOpen);
          var openSkipList = function () {
            var cont2 = $('<span></span>');
            for (var x in TWX.skipTemp) {
              var productDiv2 = new tw2widget.JobItem(ItemManager.getByBaseId(x)).getMainDiv(),
              productDel = new west.gui.Icon('abort ' + x).getMainDiv().click(function (e) {
                  e.stopPropagation();
                  e.target.parentElement.remove();
                  delete TWX.skipTemp[e.target.classList[2]];
                });
              $(productDel).css({
                'display': 'inline-block',
                'position': 'absolute',
                'right': '0px'
              });
              $(productDiv2).css('opacity', TWX.skipTemp[x]).attr('onclick', 'TWX.skipTemp[' + x + ']=$(this).css("opacity")==1?0.5:1;$(this).css("opacity",TWX.skipTemp[' + x + ']);').append(productDel);
              cont2.append(productDiv2);
            }
            var itemPrew = $('<div id="TWX_add_chest_prew" style="height:73px;width:73px;border:1px solid;border-radius:10px;float:left"/><br>');
            var textFP = new west.gui.Textfield('add_skipOpen_chest').maxlength(6).setPlaceholder('item_base_id').addKeyUpListener(function (e) {
                $('#TWX_add_chest_prew').empty();
                iconP.disable();
                var val = e.target.value;
                if (!isNaN(val) && val < forbid.maxID) {
                  var item = ItemManager.getByBaseId(val);
                  if (item) {
                    $('#TWX_add_chest_prew').append(new tw2widget.JobItem(item).getMainDiv());
                    if (item.usebonus && item.usebonus.length == 1 && item.action.split(',')[2] == "'yield');" && !TWX.skipTemp[val])
                      iconP.enable();
                  }
                }
              }),
            iconP = new west.gui.Iconbutton(new west.gui.Icon('plus'), function () {
                TWX.skipTemp[textFP.getValue()] = 1;
                skipList.hide();
                openSkipList();
              }).disable(),
            iconA = new west.gui.Icon('abort').getMainDiv().click(function () {
                textFP.setValue('');
                $('#TWX_add_chest_prew').empty();
                iconP.disable();
              });
            cont2.append(itemPrew, textFP.getMainDiv(), iconP.getMainDiv(), iconA);
            var skipList = new west.gui.Dialog(TWXlang.chooseItems, cont2).setBlockGame(false).setDraggable(true).addButton('ok').show();
          };
          $('<span title="' + TWXlang.skipHover + '" style="background-image: url(images/items/yield/productchest_1.png); cursor: pointer; position: absolute; height: 73px; width: 73px; right: 0px; top: 73px;"/>').appendTo(featScroll.getContentPane()).click(openSkipList);
          featScroll.appendContent('<br><br><h2>' + TWXlang.features + '</h2>');
          for (var k in TWX.Features) {
            TWX.GUI.checkbox[k] = new west.gui.Checkbox().setLabel(TWXlang['Feat' + k]).setSelected(TWX.Skript.getFeature(k)).appendTo(featScroll.getContentPane());
            featScroll.appendContent('<br><div style="height:5px;" />');
          }
          featScroll.appendContent('<br>');
          $(featScroll.getMainDiv()).css({
            'height': '330px',
            'margin-top': '10px'
          });
          var button = new west.gui.Button(TWXlang.save, function () {
              localStorage.setItem('scriptsLang', langBox.getValue());
              TWX.updateLang();
              for (var k in TWX.GUI.checkbox)
                TWX.Data[k] = TWX.GUI.checkbox[k].isSelected();
              TWX.Data.cooldown = TWX.cdTemp;
              TWX.Data.skipOpen = TWX.skipTemp;
              localStorage.setItem('TWLT', JSON.stringify(TWX.Data));
              TWX.Skript.updateFeat();
              new UserMessage(TWXlang.saveMessage2, 'success').show();
            });
          $(TWX.GUI.window.getContentPane()).append(featScroll.getMainDiv()).append(button.getMainDiv());
        },
        makeList: function () {
          if (!TWX.list)
            $.getScript(TWXstart.url + 'forbidN.js', function () {
              TWX.list = west.storage.ItemSetManager._setArray.slice(0);
              TWX.setListAll = {};
              TWX.setListOwn = {};
              TWX.itemListAll = {};
              TWX.itemListOwn = {};
              var slot = {
                2: ['animal', 'yield'],
                3: ['right_arm', 'left_arm'],
                6: ['body', 'pants', 'neck', 'head', 'foot', 'belt']
              };
              var i = TWX.list.length;
              while (i--) {
                var si = TWX.list[i];
                if (!forbid.sets.includes(si.key) && si.items[0] && !ItemManager.getByBaseId(si.items[0]).short.includes('friendset_') && !si.key.includes('friendship_set_'))
                  TWX.setListAll[si.key] = si;
                else
                  TWX.list.splice(i, 1);
              }
              TWX.setLength = Object.keys(TWX.setListAll).length;
              for (var j in TWX.setListAll) {
                var sa = TWX.setListAll[j];
                //sa.items.sort((a, b) => a - b);
                var sil = sa.items.length;
                sa.slots = slot[sil] && slot[sil].includes(ItemManager.getByBaseId(sa.items[1]).type) ? slot[sil][0] : 'rest';
                var items = sa.getAvailableItems();
                if (items.length) {
                  var bon = {},
                  oneType = [];
                  for (var o = 0; o < items.length; o++) {
                    var igt = ItemManager.get(items[o]);
                    items[o] = igt.item_base_id;
                    if (sa.bonus[o + 1] && !oneType.includes(igt.type))
                      bon[o + 1] = sa.bonus[o + 1];
                    oneType.push(igt.type);
                  }
                  TWX.setListOwn[j] = {
                    items: items.reverse(),
                    bonus: bon,
                    name: sa.name,
                    slots: sa.slots,
                  };
                }
              }
              TWX.list.sort(function (a, b) {
                var a1 = replUml(a.name),
                b1 = replUml(b.name);
                return (a1 == b1) ? 0 : (a1 > b1) ? 1 : -1;
              });
              var buffDesc = function (umt) {
                return umt.match(/[^%-:]+/)[0].trim();
              },
              useboni = {},
              ammobelt = 2741,
              ghostmusic = 2732,
              lantern = 2734,
              moneyboost = 2468,
              ratatou = 51127,
              cocktail = 51579,
              getBuff = function (itm, num) {
                return buffDesc(ItemManager.getByBaseId(itm).usebonus[num]);
              };
              useboni[getBuff(ammobelt, 2)] = 'offense';
              useboni[getBuff(ammobelt, 1)] = 'defense';
              useboni[getBuff(ghostmusic, 0)] = 'experience';
              useboni[getBuff(moneyboost, 0)] = 'dollar';
              useboni[getBuff(ratatou, 0)] = 'luck';
              useboni[getBuff(ratatou, 1)] = 'drop';
              useboni[getBuff(ghostmusic, 1)] = 'joball';
              useboni[getBuff(lantern, 0)] = 'speed';
              useboni[getBuff(cocktail, 0)] = 'regen';
              for (var kn in CharacterSkills.keyNames)
                useboni[CharacterSkills.keyNames[kn]] = kn;
              var addItems = function (obj, state) {
                var ob = obj.bonus,
                boni = {
                  1: ob.item.slice()
                },
                slot = 'item';
                if (obj.usebonus) {
                  slot = 'buff';
                  for (var oub of obj.usebonus) {
                    if (!oub)
                      continue;
                    var desc = buffDesc(oub);
                    if (useboni[desc])
                      boni[1].push({
                        name: useboni[desc],
                        value: oub.match(/\d+/)[0],
                      });
                  }
                } else
                  for (var cat in ob) {
                    if (cat == 'item')
                      continue;
                    for (var type in ob[cat]) {
                      var ct = ob[cat][type];
                      if (ct > 0) {
                        boni[1].push({
                          name: type,
                          value: ct,
                          isSector: cat == 'fortbattlesector',
                          leveled: obj.item_level > 0
                        });
                      }
                    }
                  }
                TWX['itemList' + state][obj.item_base_id] = {
                  bonus: boni,
                  name: obj.name,
                  slots: slot,
                  pos: obj.type,
                  item_level: obj.item_level,
                };
              };
              var allItems = ItemManager.getAll();
              for (var k in allItems)
                if (k > 9 && k < forbid.maxID && !forbid.IDs.includes(k) && !(allItems[k].set && !TWX.setListAll[allItems[k].set]))
                  addItems(allItems[k], 'All');
              for (var l in Bag.items_by_id)
                if (!forbid.IDs.includes(k))
                  addItems(Bag.items_by_id[l].obj, 'Own');
              for (var m in Wear.wear)
                addItems(Wear.wear[m].obj, 'Own');
              var collect = set1.collector_set.bonus[9], //pray
              pilg = set1.set_pilgrim_male.bonus[2], //build
              lee = set1.set_oktoberfest_2016_1.bonus[6], //offenstrue
              hero = set1.independance_event_set7.bonus[2], //drop
              delChar = function (list) {
                return list.desc.replace(/[0-9]|\+|\.|\%/g, '').substring(1);
              };
              TWX.searchObj = {
                offense: [delChar(collect[5]), 'fort/battle/button_attack'],
                offensetrue: [delChar(lee[4]), 'fort/battle/help01'],
                defense: [delChar(hero[13]), 'fort/battle/button_defend'],
                defensetrue: [delChar(collect[6]), 'fort/battle/help02'],
                resistance: [delChar(hero[15]), 'fort/battle/resistance'],
                //damage: ['weapon damage', 'items/left_arm/golden_rifle'],
                damagetrue: [delChar(collect[7]), 'items/left_arm/golden_rifle'],
                experience: [delChar(hero[10]), 'items/yield/xp_boost', '<br>'],
                dollar: [delChar(hero[11]), 'items/yield/dollar_boost'],
                luck: [delChar(collect[2]), 'items/yield/luck_boost'],
                drop: [delChar(hero[9]), 'items/yield/product_boost'],
                joball: [delChar(collect[0]), 'window/job/jobstar_small_gold'],
                speed: [delChar(collect[1]), 'jobs/walk'],
                regen: [delChar(collect[3]), 'jobs/sleep'],
                pray: [delChar(collect[4]), 'jobs/pray'],
                job1000: [delChar(pilg[0]), 'jobs/build'],
              };
              for (var ca = 0; ca < CharacterSkills.allSkillKeys.length; ca++) {
                if (ca % 5 === 0) {
                  var attr = CharacterSkills.allAttrKeys[ca / 5];
                  TWX.searchObj[attr] = [CharacterSkills.keyNames[attr], 'window/skills/circle_' + attr, ca % 10 === 0 ? '<br>' : ''];
                }
                var skill = CharacterSkills.allSkillKeys[ca];
                TWX.searchObj[skill] = [CharacterSkills.keyNames[skill], 'window/skills/skillicon_' + skill];
              }
              if (!localStorage.getItem('TWLTdate') || Date.parse(forbid.date) > Date.parse(localStorage.getItem('TWLTdate'))) {
                var setNames = '',
                nSets = forbid.unlock;
                for (var h of nSets)
                  setNames += TWX.GUI.getSetOrItem(h, set1[h]) + '<br>';
                new west.gui.Dialog(TWX.name, '<span><b>' + forbid.date.toDateString() + '</b><br>' + TWXlang.newsets + ':<br><br>' + setNames + '</span>', west.gui.Dialog.SYS_OK).setBlockGame(false).setDraggable(true).addButton('ok').show();
                localStorage.setItem('TWLTdate', forbid.date);
              }
            });
        },
        itemsInInv: function (id) {
          var upgrade = isNaN(id) ? TWX.currList[id].items : [id],
          items = [];
          for (var g of upgrade) {
            for (var h = 0; h <= 5; h++) {
              items.push(g * 1000 + h);
            }
          }
          var invItems = Bag.getItemsByItemIds(items);
          if (invItems.length > 0) {
            Wear.open();
            Inventory.showCustomItems(invItems);
          } else
            new UserMessage(TWXlang.noItems, 'hint').show();
        },
        getSetOrItem: function (id, obj, nolink) {
          if (!obj)
            return id;
          var isItem = !isNaN(id),
          nNew = window.forbid && (isItem && id >= forbid.unlockID || !isItem && forbid.unlock.includes(id)) ? '<img src="' + TWXstart.Images('new') + '">' : '',
          nLvl = obj.item_level ? '<img src="images/items/item_level.png"><span style="font-size: 11px;color:#ffffff;text-shadow:black -1px 0 1px,black 0 1px 1px,black 1px 0 1px,black 0 -1px 1px;">' + obj.item_level + '</span>' : '',
          options = {
            show_alreadyown: true
          };
          if (TWX.lvlToggle)
            options.character = {
              level: TWX.lvlToggle
            };
          var nPopup = 'data-setkey="' + id + '"',
          click = 'onclick="TWX.GUI.itemsInInv(\'' + id + '\')"',
          img = '';
          if (isItem) {
            var itemId = id + '00' + obj.item_level,
            item = ItemManager.get(itemId);
            nPopup = 'data-itemid="' + itemId + '" title="' + (new ItemPopup(item, options).getXHTML().escapeHTML()) + '"';
            img = '<img src="' + item.image + '" width="25">';
          } else if (TWX.GUI.window.currentActiveTabId == 'SetBonus')
            nPopup += 'title="' + TWXlang.showItems + '" style="color:#FFE7B1;"';
          else
            click = 'onclick="TWX.GUI.open(\'openSetsWindow\',\'' + id + '\',\'SetBonus\')"';
          if (nolink)
            click = '';
          return '<b><span class="linklike" ' + nPopup + click + '>' + nNew + img + nLvl + obj.name + '</span></b>';
        },
        newState: '',
        html: {},
        openSetsWindow: function (st, tab) {
          TWX.GUI.getDefault(tab);
          TWX.GUI.window.setTitle(tab);
          var newSet = false;
          if (typeof st === 'string') {
            newSet = true;
            TWX['curr' + tab] = st;
          }
          var scrollpane = new west.gui.Scrollpane('TWXSetsWindow');
          $(scrollpane.getMainDiv()).css({
            'margin-left': '120px',
            'margin-top': '10px',
            'width': '578px'
          });
          var lvlUp = function (level, value) {
            var ret = !level ? 0 : value < 1 ? Math.round(Math.max(1, value * 1000 * level)) / 10000 : Math.round(Math.max(1, value * 0.1 * level));
            return value + ret;
          },
          charLvl = Character.level,
          getBonImg = function (n, w) {
            var son = TWX.searchObj[n] || JobList.getJobById(n.slice(3));
            return '<img src="images/' + (son[1] || 'jobs/' + son.shortname) + '.png" width="' + w + '" title="' + (son[0] || son.name) + '">';
          },
          types = {},
          perL = set1.instance_set_1.bonus[2][0].desc.match(/\(.*?\)/)[0],
          compare = function (sets, id) {
            for (var i in sets) {
              var si = sets[i];
              for (var k in si.bonus)
                for (var ID of si.bonus[k]) {
                  var ib = ID.bonus || ID;
                  var NAM = (ib.name || ib.type) + (ib.job || ib.isSector || '');
                  if (id[NAM]) {
                    if (!types[i]) {
                      types[i] = {
                        desc: (TWX.SPEC.includes(NAM) ? '% ' : ' ') + (ID.key && !TWX.lvlToggle ? perL : ''),
                        value: {},
                        values: {},
                        compVal: {
                          sum: 0
                        },
                        slots: si.slots,
                        name: si.name,
                        item_level: si.item_level,
                        items: si.items,
                      };
                    }
                    if (!types[i].value[NAM])
                      types[i].value[NAM] = 0;
                    types[i].value[NAM] += ib.value;
                    var NUM = types[i].value[NAM] * (TWX.SPEC.includes(NAM) && types[i].slots != 'buff' ? 100 : 1);
                    var VAL = TWX.lvlToggle && ID.key ? Math.ceil(NUM * TWX.lvlToggle) : NUM;
                    var lvl = ib.leveled ? 0 : si.item_level;
                    var LVL = lvlUp(lvl, VAL) * id[NAM];
                    if (!types[i].values[k])
                      types[i].values[k] = $.extend({
                          sum: 0
                        }, types[i].values[k - 1]);
                    types[i].values[k][NAM] = Math.round(LVL * 1000) / 1000;
                    types[i].compVal[NAM] = !TWX.lvlToggle && ID.key ? lvlUp(lvl, Math.ceil(NUM * Character.level)) * id[NAM] : LVL;
                    types[i].parts = k;
                  }
                }
              if (types[i]) {
                for (var cv in types[i].compVal) {
                  types[i].compVal.sum += types[i].compVal[cv];
                  for (var nv in types[i].values)
                    types[i].values[nv].sum += types[i].values[nv][cv] || 0;
                }
                if (si.items) {
                  for (var is of si.items)
                    if (ItemManager.getByBaseId(is).sub_type != id.subWeapon)
                      types[i].compVal.sum += types[is] ? types[is].compVal.sum : 0;
                }
              }
            }
          },
          reloadLvl = 0,
          showbonus = {
            'SetBonus': function (id) {
              TWX.currSetBonus = id;
              scrollpane.contentPane.empty();
              var types = {},
              sets = TWX.currList[id];
              if (!sets)
                return;
              TWX.GUI.window.setTitle(TWX.GUI.getSetOrItem(id, sets));
              var spCont = '<span style="width:60%;position:absolute;">';
              for (var k in sets.bonus) {
                spCont += '<b>' + k + ' ' + TWXlang.items + ':</b><br>';
                for (var ID of sets.bonus[k]) {
                  var ib = ID.bonus || ID;
                  var NAM = (ib.name || ib.type) + (ib.job || ib.isSector || '');
                  if (!types[NAM]) {
                    var DESC = ID.desc && (TWX.lvlToggle && ID.key && ID.desc.replace(/[0-9]|\+|\.|\([^)]+\)$/g, '') || ID.desc.replace(/[0-9]|\+|\./g, '')) || CharacterSkills.keyNames[NAM];
                    types[NAM] = {
                      key: (ID.key || 0),
                      desc: DESC,
                      value: 0
                    };
                  }
                  types[NAM].value += ib.value;
                }
                for (var m in types) {
                  var n = types[m];
                  var NUM = n.value * (TWX.SPEC.includes(m) ? 100 : 1);
                  var VAL = TWX.lvlToggle && n.key ? Math.ceil(NUM * TWX.lvlToggle) : Math.round(NUM * 100) / 100;
                  spCont += getBonImg(m, 23) + ' + ' + VAL + ' ' + n.desc + '<br>';
                }
              }
              spCont += '</span><span style="width:40%;left:60%;position:absolute;">';
              for (var o of TWX.currList[id].items)
                spCont += TWX.GUI.getSetOrItem(o, TWX['itemList' + TWX.currState][o]) + '<br>';
              scrollpane.appendContent(spCont);
              setTimeout(function () {
                var cont = $('div.TWXSetsWindow div.tw2gui_scrollpane_clipper_contentpane > span');
                cont.parent().height(cont.height() + 10);
              }, 100);
            },
            'BonusSearch': function (idString) {
              var id = JSON.parse(idString);
              if (Object.keys(id).length > 2 && !TWX.lvlToggle) {
                if (!TWX.currBonusSearch) {
                  TWX.currBonusSearch = idString;
                  reloadLvl = 1;
                }
                return lvlBox.select(charLvl);
              }
              scrollpane.contentPane.empty();
              types = {};
              var title = '';
              for (var oi in TWX.searchObj)
                if (id[oi])
                  title += getBonImg(oi, 35) + ' ';
              TWX.GUI.window.setTitle(title);
              var ns = '' + TWX.lvlToggle + TWX.onlyOwnSets;
              if (idString != TWX.currBonusSearch || ns != TWX.GUI.newState || reloadLvl) {
                TWX.currBonusSearch = idString;
                TWX.GUI.newState = ns;
                reloadLvl = 0;
                compare(TWX['itemList' + TWX.currState], id);
                compare(TWX.currList, id);
                var types2 = Object.keys(types).sort(function (a, b) {
                    return types[b].compVal.sum / types[b].parts - types[a].compVal.sum / types[a].parts;
                  }),
                ic = 0;
                TWX.GUI.html = {
                  body: '',
                  right_arm: '',
                  animal: '',
                  rest: '',
                  item: '',
                  buff: '',
                };
                for (var type of types2) {
                  var n = types[type],
                  nsi = n.slots == 'item';
                  if (nsi && ic++ > 200)
                    continue;
                  var setval = 0;
                  TWX.GUI.html[n.slots] += '<br>' + TWX.GUI.getSetOrItem(type, n) + '<br>';
                  for (var o in n.values) {
                    if (o == 'sum')
                      continue;
                    var pre = (nsi ? '' : o + ' ' + TWXlang.parts + ':');
                    TWX.GUI.html[n.slots] += pre + ' +' + n.values[o].sum + n.desc + '<br>';
                    setval = n.values[o].sum;
                  }
                  if (n.items) {
                    var ibs = 0;
                    for (var ib of n.items)
                      if (ItemManager.getByBaseId(ib).sub_type != id.subWeapon)
                        ibs += types[ib] ? types[ib].values[1].sum : 0;
                    TWX.GUI.html[n.slots] += '& ' + TWXlang.items + ': +' + (ibs + setval) + '<br>';
                  }
                }
              }
              scrollpane.appendContent('<span class="TWXBonusS body" style="width:16%;position:absolute;"><h4>' + TWXlang.body + '</h4></span><span class="TWXBonusS right_arm" style="width:16%;left:17%;position:absolute;"><h4>' + TWXlang.right_arm + '</h4></span><span class="TWXBonusS animal" style="width:16%;left:34%;position:absolute;"><h4>' + TWXlang.animal + '</h4></span><span class="TWXBonusS rest" style="width:16%;left:51%;position:absolute;"><h4>' + TWXlang.rest + '</h4></span><span class="TWXBonusS item" style="width:16%;left:68%;position:absolute;"><h4>' + TWXlang.items + '</h4></span><span class="TWXBonusS buff" style="width:16%;right:0;position:absolute;"><h4>' + TWXlang.buff + '</h4></span>');
              for (var hs in TWX.GUI.html)
                $('.TWXBonusS.' + hs).append(TWX.GUI.html[hs]);
              setTimeout(function () {
                var maxHeight = 0;
                for (var h of $('div.TWXSetsWindow span.TWXBonusS'))
                  if (h.clientHeight > maxHeight)
                    maxHeight = h.clientHeight;
                $('div.TWXSetsWindow div.tw2gui_scrollpane_clipper_contentpane').height(maxHeight + 10);
              }, 200);
            },
          },
          loadResult = function () {
            if (TWX.setLength <= forbid.max || TWX.onlyOwnSets || newSet) {
              if (TWX['curr' + tab])
                showbonus[tab](TWX['curr' + tab]);
              newSet = false;
            }
          },
          selbox,
          loadSelbox = function () {
            TWX.currState = TWX.onlyOwnSets ? 'Own' : 'All';
            TWX.currList = TWX['setList' + TWX.currState];
            selbox = new west.gui.Selectbox().setWidth(250);
            TWX.GUI.window.setTitle(tab);
            scrollpane.contentPane.empty();
            if (TWX.setLength <= forbid.max || TWX.onlyOwnSets) {
              if (tab == 'SetBonus') {
                selbox.addListener(showbonus.SetBonus);
                var sbaI = function (j) {
                  var sj = TWX.currList[j];
                  selbox.addItem(j, '<img src=' + (forbid.unlock.includes(j) ? TWXstart.Images('new') : ItemManager.getByBaseId(sj.items[0]).image) + ' height="20" width="20">' + '<div style="padding-right: 20px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">' + sj.name + '</div>', sj.name);
                };
                if (TWX.setAbc) {
                  for (var h of TWX.list)
                    if (TWX.currList[h.key])
                      sbaI(h.key);
                } else
                  for (var i in TWX.currList)
                    sbaI(i);
              }
              scrollpane.appendContent('<h1>' + TWXlang.choose + '!</h1>');
            } else
              scrollpane.appendContent('<p style="color: #a31919;">ERROR: There are new sets added to the game.<br>Please <a href="javascript:TWX.GUI.open(\'openKontakt\');" title="Open contact tab">contact me</a> so I can add the sets to the script.</p>');
          },
          img = {
            SetBonus: 'dayofthedead_2014_hat3',
            BonusSearch: 'st_patrick_head',
            shot: 'goldensable',
            hand: 'golden_gun',
          },
          buttonLogic = function (ev, d, b) {
            var butObj = b || ev.data.obj,
            id = butObj.id,
            val = 1;
            if ($(ev.currentTarget).hasClass('butPlus') || d > 0) {
              if (butObj.current_value + 1 > butObj.max_value)
                return false;
            } else {
              if (butObj.current_value - 1 < butObj.min_value)
                return false;
              val = -1;
            }
            butObj.current_value += val;
            if (CharacterSkills.skills[id]) {
              var attr = CharacterSkills.skills[id].attr_key;
              if (!TWX.chooseBonus[attr])
                TWX.chooseBonus[attr] = 0;
              TWX.chooseBonus[attr] += val;
              $('.chooseBonus #' + attr + ' span.displayValue').text(TWX.chooseBonus[attr]);
              if (TWX.chooseBonus[attr] === 0)
                delete TWX.chooseBonus[attr];
            }
            if (butObj.current_value === 0)
              delete TWX.chooseBonus[id];
            else
              TWX.chooseBonus[id] = butObj.current_value;
            $('.chooseBonus #' + id + ' span.displayValue').text(butObj.current_value);
            return true;
          },
          cont,
          getCB = function (id) {
            if (TWX.searchObj[id][2])
              cont.append(TWX.searchObj[id][2]);
            var div = $('<div class="chooseBonus" style="display:inline-block;">' + getBonImg(id, 45)).appendTo(cont);
            new west.gui.Plusminusfield(id, TWX.chooseBonus[id] || 0, -100, 100, 0, buttonLogic, buttonLogic, buttonLogic).setWidth(45).appendTo(div);
          },
          chooseWindow = function () {
            cont = $('<span>').append('<div style="width:92px;display:inline-block;vertical-align:top;background-color:#A47F5B;border-radius:5px;">' +
                '<img id="switchWeapon" style="cursor:pointer;" src="https://wiki.the-west.de/images/1/1a/Switch_weapons_icon.png" title="' + TWXlang.switchWeapon + '" width="45">' +
                '<img id="subWeapon" src="images/items/right_arm/' + img[TWX.chooseBonus.subWeapon] + '.png" width="45"></div>');
            for (var so in TWX.searchObj) {
              getCB(so);
            }
            new west.gui.Dialog(TWXlang.selectBonus, cont).setBlockGame(false).setDraggable(true).addButton('ok', function () {
              if (Object.keys(TWX.chooseBonus).length > 1)
                showbonus.BonusSearch(JSON.stringify(TWX.chooseBonus));
              else {
                TWX.currBonusSearch = '';
                loadSelbox();
              }
            }).addButton(TWXlang.resetB, function () {
              TWX.chooseBonus = {
                subWeapon: 'hand'
              };
              chooseWindow();
            }).addButton('cancel').show();
            $('#switchWeapon').click(function () {
              TWX.chooseBonus.subWeapon = TWX.chooseBonus.subWeapon == 'shot' ? 'hand' : 'shot';
              $("#subWeapon").attr('src', 'images/items/right_arm/' + img[TWX.chooseBonus.subWeapon] + '.png');
            });
            $('div.chooseBonus .tw2gui_plusminus').width('auto');
            $('div.chooseBonus').css('margin-left', '2px');
          };
          setbutton = $('<span title="' + TWXlang.choose + '" style="background-image:url(images/items/head/' + img[tab] + '.png); cursor:pointer;  position:absolute; height:73px; width:73px; margin:4px;" />');
          setbutton.click(function () {
            if (tab == 'SetBonus') {
              var pos = $(setbutton).offset();
              selbox.setPosition(pos.left + 35, pos.top + 50);
              selbox.show();
            } else if (tab == 'BonusSearch' && (TWX.setLength <= forbid.max || TWX.onlyOwnSets))
              chooseWindow();
          });
          var content = $('<div>');
          content.css({
            'margin-top': '90px',
            'width': '110px',
            'position': 'absolute',
          });
          $(TWX.GUI.window.getContentPane()).append(setbutton, content, scrollpane.getMainDiv());
          var maxLvl = 150,
          setsSort = tab == 'SetBonus' ? new west.gui.Checkbox('ABC', null, function (state) {
              TWX.setAbc = state;
              loadSelbox();
            }).setSelected(TWX.setAbc, true).getMainDiv() : '',
          lvlBox = new west.gui.Combobox().setWidth(77).addItem(0, '0').addItem(charLvl, '' + charLvl),
          onlyOwn = new west.gui.Checkbox(TWXlang.ownSets, null, function (state) {
              TWX.onlyOwnSets = state;
              loadSelbox();
              loadResult();
            }).setSelected(TWX.onlyOwnSets);
          if (charLvl != maxLvl)
            lvlBox.addItem(maxLvl, '' + maxLvl);
          lvlBox.select(TWX.lvlToggle).addListener(function (lvl) {
            TWX.lvlToggle = lvl;
            loadResult();
          });
          content.append(setsSort, '<br><br><b>' + TWXlang.level + ':</b>', lvlBox.getMainDiv(), onlyOwn.getMainDiv());
          $('div.tw2gui_window.TWX.active_tab_id_BonusSearch').width(1060);
          $('div.tw2gui_window.TWX.active_tab_id_BonusSearch div.tw2gui_scrollpane.TWXSetsWindow').width(900);
        },
        openFrame: function (iframe, size) {
          TWX.GUI.window.setResizeable(true).addClass('nocloseall').clearContentPane().activateTab('TWXFrame');
          TWX.GUI.window.dontCloseAll = true;
          if (Array.isArray(size))
            TWX.GUI.window.setSize(size[0], size[1]);
          var wnd = TWX.GUI.window.getMainDiv();
          $('.tw2gui_window_inset', wnd).css('background-image', 'url(' + TWXstart.Images('LT_backGr', 1) + ')');
          $('.textart_title', wnd).css('display', 'none');
          var contPan = $(TWX.GUI.window.getContentPane());
          contPan.css('margin-top', '-30px');
          new west.gui.Button('QuakeNet Webchat').appendTo(contPan).click(function () {
            var iframe = 'https://webchat.quakenet.org';
            TWX.GUI.openFrame(iframe);
          });
          new west.gui.Button('Wiki The-West').appendTo(contPan).click(function () {
            var iframe = Game.helpURL.replace('http:', 'https:');
            TWX.GUI.openFrame(iframe);
          });
          new west.gui.Button('TW-DB.info').appendTo(contPan).click(function () {
            var iframe = 'https://tw-db.info';
            TWX.GUI.openFrame(iframe);
          });
          if (typeof iframe === 'string')
            contPan.append($('<iframe src="' + iframe + '" style="width:100%; height:94%; border:0; margin-bottom:1px; ">'));
        },
        openSender: function () {
          TWX.GUI.getDefault('TWXSender');
          var EvImg = EvName == 'Octoberfest' ? 'window/events/octoberfest/pretzels_icon' : 'interface/friendsbar/events/' + EvName;
          TWX.GUI.window.setTitle(sendGift.label + '    <img src="images/' + EvImg + '.png">');
          if (!isDefined(WestUi.FriendsBar.friendsBarUi)) {
            WestUi.FriendsBar.toggle();
          }
          setTimeout((function () {
              var e = [],
              t = Chat.Friendslist.getFriends(),
              r = WestUi.FriendsBar.friendsBarUi.friendsBar.eventActivations,
              i,
              s,
              u,
              a;
              for (s = 0; s < t.length; s++) {
                i = typeof r[t[s].playerId] !== 'undefined' && r[t[s].playerId][EvName] !== 'undefined' ? r[t[s].playerId][EvName] : 0;
                e.push({
                  n: t[s].pname,
                  i: t[s].playerId,
                  t: i
                });
              }
              e.sort(Sort.create('asc', function (e) {
                  return e.t;
                }));
              i = $('<table align="center" border="1" cellpadding="2px" border="1">');
              for (s = 0; s < e.length; s++) {
                u = e[s].t + parseInt(sendGift.cooldown, 10) - new ServerDate().getTime() / 1000;
                if (u > 0) {
                  a = $('<td>(' + u.formatDurationBuffWay() + ')</td>');
                } else {
                  a = $('<td><a href="#">' + sendGift.label + '</a></td>').click(e[s].i, function (e) {
                      $(this).parent().remove();
                      Ajax.remoteCall('friendsbar', 'event', {
                        player_id: e.handleObj.data,
                        event: EvName
                      }, function (t) {
                        if (t.error)
                          return MessageError(t.msg).show();
                        MessageSuccess(t.msg).show();
                        var n = e.handleObj.data;
                        r[n] = r[n] || {};
                        r[n][EvName] = t.activationTime;
                      });
                    });
                }
                i.append($('<tr>)').append($('<td>' + e[s].n + '</td>'), a));
              }
              var scrollpane = new west.gui.Scrollpane();
              $(scrollpane.getMainDiv()).css({
                'margin-top': '10px',
                'width': '340px',
                'position': 'absolute',
              });
              scrollpane.appendContent(i);
              if (t.length === 0)
                scrollpane.appendContent('<h2 style="text-align: center; color: #a31919; margin-top: 50px;">' + TWXlang.noFriends + '</h2>');
              var scrollP = new west.gui.Scrollpane();
              $(scrollP.getMainDiv()).css({
                'margin-top': '10px',
                'margin-left': '345px',
                'width': '353px', //698-345
              });
              if (EvName == 'Hearts' || EvName == 'DayOfDead') {
                var name = '',
                weMmd = west.events.Manager.model._data.events;
                if (EvName == 'Hearts')
                  name = weMmd.valentine.model._data.name;
                else
                  name = weMmd.DayOfDead.model._l10n.ui.mouseover + ' ' + new Date().getFullYear();
                scrollP.appendContent('<h3>' + name + '</h3>');
                //west.events.Manager.getRunningEvents()
                var rew = Game.sesData[EvName].rewards;
                for (var r in rew) {
                  var div = $('<div />');
                  div.append('<img src="images/' + EvImg + '.png">  <b>' + r + '</b><br>' + rew[r].desc + '<br>');
                  var id = rew[r].id;
                  if (isNaN(id)) {
                    div.append('<i>' + TWXlang.reward + ': ' + id + '</i><br><br>');
                  } else {
                    var invItem = new tw2widget.JobItem(ItemManager.get(id));
                    div.append(invItem.getMainDiv()).append('<br><br><br><br><br>');
                  }
                  scrollP.appendContent(div);
                }
              }
              $(TWX.GUI.window.getContentPane()).append(scrollpane.getMainDiv()).append(scrollP.getMainDiv());
            }), 500);
        },
      };
      TWX.RecipeMarket = {
        init: function () {
          var inject = function (category, data) {
            $('.TWXFind').remove();
            var gLS4P = Game.InfoHandler.getLocalString4ProfessionId;
            var buttons_recipe = $('<div class="TWXFind"><a href=\'javascript:TWX.RecipeMarket.filterRecipe(0);\'><img title="' + TWXlang.allprofessions + '" alt="allprofessions" src="' + TWXstart.Images('LT_recipes') + '" /></a><a href=\'javascript:TWX.RecipeMarket.filterRecipe(1);\'><img title="' + gLS4P(1) + '" alt="fieldcook" style="width: 30px;" src="images/items/recipe/recipe_cook.png" /></a><a href=\'javascript:TWX.RecipeMarket.filterRecipe(2);\'><img title="' + gLS4P(2) + '" alt="tonicpeddler" style="width: 30px;" src="images/items/recipe/recipe_quack.png" /></a><a href=\'javascript:TWX.RecipeMarket.filterRecipe(3);\'><img title="' + gLS4P(3) + '" alt="blacksmith" style="width: 30px;" src="images/items/recipe/recipe_smith.png" /></a><a href=\'javascript:TWX.RecipeMarket.filterRecipe(4);\'><img title="' + gLS4P(4) + '" alt="mastersaddler" style="width: 30px;" src="images/items/recipe/recipe_sattle.png" /></a></div>');
            if (category == 'recipe') {
              $('.searchbox').before(buttons_recipe);
              $('.searchbox').css('margin-bottom', '0');
              var items = [];
              for (var i = 0; i < data.length; i++)
                items[i] = ItemManager.get(data[i]);
              items.sort(function (a, b) {
                return a.min_level - b.min_level;
              });
              TWX.RecipeMarket.Recipe = items;
              for (var h = 0; h < items.length; h++)
                data[h] = items[h].item_id;
              return data;
            }
            $('.searchbox').css('margin-bottom', '18px');
            return data;
          };
          MarketWindow.Buy.twlt_updateCategory = MarketWindow.Buy.updateCategory;
          MarketWindow.Buy.updateCategory = function (category, data) {
            data = inject(category, data);
            MarketWindow.Buy.twlt_updateCategory.call(this, category, data);
          };
          MarketWindow.getClearName = function (obj) {
            if (obj.type == 'recipe') {
              var name = ItemManager.get(obj.craftitem).name;
              return isDefined(name) ? name : obj.name;
            }
            return obj.name;
          };
        },
        filterRecipe: function (profession_id) {
          var data = $('#mpb_recipe_content p');
          data.show();
          if (profession_id === 0)
            return;
          for (var i = 0; i < TWX.RecipeMarket.Recipe.length; i++)
            if (profession_id != TWX.RecipeMarket.Recipe[i].profession_id)
              $(data[i]).hide();
        }
      };
      TWX.AchievHide = {
        init: function () {
          var hideUnErfolge = function () {
            $('.playerachievement-' + Character.playerId + ' .achievement').hide();
            $('.playerachievement-' + Character.playerId + ' .achievement .achievement_unachieved').parent().show();
          };
          AchievementExplorer.prototype.twlt_updateContent = AchievementExplorer.prototype.updateContent;
          AchievementExplorer.prototype.updateContent = function (data) {
            var tmp = AchievementExplorer.prototype.twlt_updateContent.call(this, data);
            if (data.folder.id != 'overall' && data.folder.id != 'heroics')
              hideUnErfolge();
            return tmp;
          };
        }
      };
      TWX.MarketMessage = {
        Towns: {},
        init: function () {
          Ajax.get('map', 'get_minimap', {}, function (json) {
            if (json.error)
              return new UserMessage(json.msg).show();
            TWX.MarketMessage.Towns = json.towns;
            EventHandler.listen('position_change', function () {
              TWX.MarketMessage.check();
            });
            var setVal2 = setInterval(function () {
                if (Character.position.x) {
                  clearInterval(setVal2);
                  TWX.MarketMessage.check();
                }
              }, 1000);
          });
        },
        check: function () {
          var town_id,
          offers,
          bids,
          fetch = function (action) {
            Ajax.remoteCall('building_market', action, {}, function (resp) {
              if (resp.error)
                return new UserMessage(resp.msg).show();
              Character.setDeposit(resp.deposit);
              Character.setMoney(resp.cash);
              return new MessageSuccess(resp.msg).show();
            });
          };
          var fetchAll = function (what) {
            if (what == 1)
              fetch('fetch_town_offers');
            fetch('fetch_town_bids');
            EventHandler.signal('inventory_changed');
          };
          var showDialog = function () {
            new west.gui.Dialog(TWXlang.market1, TWXlang.market2, west.gui.Dialog.SYS_QUESTION).addButton(TWXlang.all, function () {
              fetchAll(1);
            }).addButton(TWXlang.onlyBids, function () {
              fetchAll(0);
            }).addButton(TWXlang.nothing).show();
          };
          var checkItems = function () {
            for (var g = 0; g < bids.length; g++) {
              var bgs = bids[g];
              if (bgs.market_town_id == town_id && (bgs.auction_ends_in < 0 || bgs.current_bid == bgs.max_price)) {
                showDialog();
                return;
              }
            }
            for (var f = 0; f < offers.length; f++) {
              var ofs = offers[f];
              if (ofs.market_town_id == town_id && (ofs.auction_ends_in < 0 || ofs.current_bid == ofs.max_price)) {
                showDialog();
                return;
              }
            }
          };
          var get_offers = function () {
            Ajax.remoteCall('building_market', 'fetch_offers', {
              page: 0
            }, function (json) {
              offers = json.msg.search_result;
              checkItems();
            });
          };
          var get_bids = function () {
            Ajax.remoteCall('building_market', 'fetch_bids', {}, function (json) {
              bids = json.msg.search_result;
              get_offers();
            });
          };
          var towns = TWX.MarketMessage.Towns;
          for (var k in towns)
            if (towns[k].x == Character.position.x && towns[k].y == Character.position.y) {
              town_id = towns[k].town_id;
              var wait = Character.health < 6 ? Character.playerId.toString().substr(-4) : 1;
              setTimeout(function () {
                get_bids();
              }, wait);
            }
        }
      };
      TWX.MarketTown = {
        init: function () {
          if (!TWX.Skript.getFeature('MarketMessage'))
            Ajax.get('map', 'get_minimap', {}, function (json) {
              if (json.error)
                return new UserMessage(json.msg).show();
              TWX.MarketMessage.Towns = json.towns;
            });
          MarketWindow.twlt_showTab = MarketWindow.showTab;
          MarketWindow.showTab = function () {
            MarketWindow.twlt_showTab.apply(this, arguments);
            if (MarketWindow.townId > -1)
              MarketWindow.window.setTitle(MarketWindow.window.titler.text + " - " + TWX.MarketMessage.Towns[MarketWindow.townId].name);
          };
        }
      };
      TWX.MarkDaily = {
        init: function () {
          var addBorder = function () {
            var rows = $('.reward-row');
            var row = $(rows[4]);
            if (row.hasClass('today'))
              row.css('border', '20px solid red');
          };
          west.player.LoginBonus.prototype.twlt_show = west.player.LoginBonus.prototype.show;
          west.player.LoginBonus.prototype.show = function () {
            var tmp = west.player.LoginBonus.prototype.twlt_show.call(this);
            if (tmp !== undefined)
              return tmp;
            addBorder();
          };
        }
      };
      TWX.DuellMap = {
        init: function () {
          var generateNpcPopup = function (data) {
            var weapon = ItemManager.get(data.weaponId),
            damage = weapon.getDamage(data),
            npcData = data.bonus;
            return '<table class="dln_npcskill_popup"><tr><td colspan="5" class="text_bold">' + TWXlang.popup + '<br>&nbsp;</td></tr><tr><td><img src="/images/window/duels/npcskill_shot.jpg" /></td><td><img src="/images/window/duels/npcskill_punch.jpg" /></td><td><img src="/images/window/duels/npcskill_aim.jpg" /></td><td><img src="/images/window/duels/npcskill_appearance.jpg" /></td><td></td></tr><tr><td class="text_bold">' + (npcData.shot || 0) + '</td><td class="text_bold">' + (npcData.punch || 0) + '</td>' + '<td class="text_bold">' + (npcData.aim || 0) + '</td><td class="text_bold">' + (npcData.appearance || 0) + '</td><td></td></tr>' + '<tr><td><img src="/images/window/duels/npcskill_tactic.jpg" /></td><td><img src="/images/window/duels/npcskill_reflex.jpg" /></td><td><img src="/images/window/duels/npcskill_dodge.jpg" /></td><td><img src="/images/window/duels/npcskill_tough.jpg" /></td><td><img src="/images/window/duels/npcskill_health.jpg" /></td></tr><tr><td class="text_bold">' + (npcData.tactic || 0) + '</td><td class="text_bold">' + (npcData.reflex || 0) + '</td><td class="text_bold">' + (npcData.dodge || 0) + '</td><td class="text_bold">' + (npcData.tough || 0) + '</td><td class="text_bold">' + (npcData.health || 0) + '</td></tr><tr><td colspan="2" class="text_bold"><img src="' + weapon.image + '" /></td><td colspan="3" class="text_bold"><br>' + weapon.name + '<br>(' + TWXlang.damage + ': ' + damage.min + ' - ' + damage.max + ')</td></tr></table>';
          };
          Ajax.remoteCallMode('character', 'get_info', {}, function (resp) {
            Character.setDuelLevel(resp.duelLevel);
          });
          var progB = new west.gui.Progressbar(0, 100);
          progB.setTextOnly(true);
          $(progB.getMainDiv()).css('width', '772px');
          var fillPage = function () {
            $('#TWXDuellMapTable').empty();
            $('#TWXDuellMapPlayers').empty();
            $('#TWXDuellMapTable').append('<tr><th>' + TWXlang.name + '</th><th>' + TWXlang.town + '</th><th>' + TWXlang.level + '</th><th>' + TWXlang.duelLevel + '</th><th>' + TWXlang.exp + '</th><th>' + TWXlang.distance + '</th><th>' + TWXlang.startduel + '</th><th>' + TWXlang.centerMap + '</th></tr>');
            for (var k in TWX.DuellMap.Player) {
              var data = TWX.DuellMap.Player[k];
              var content = $('<tr></tr>');
              content.append('<td><a href="javascript:void(PlayerProfileWindow.open(' + data.player_id + '));" title="' + (Character.charClass == 'duelist' ? generateNpcPopup(data).escapeHTML() : '') + '">' + data.player_name + '</a></td>',
                '<td><a href="javascript:void(TownWindow.open(' + data.town_x + ',' + data.town_y + '));">' + data.town_name + '</a></td>',
                '<td>' + data.level + '</td>',
                '<td>' + data.duellevel + '</td>',
                '<td>' + Math.round((7 * data.duellevel - 5 * Character.duelLevel + 5) * Character.duelMotivation * 3) + '</td>',
                '<td>' + window.Map.calcWayTime(Map.getLastQueuePosition(), {
                  x: data.character_x,
                  y: data.character_y
                }).formatDuration() + '</td>',
                '<td><a href="#" onclick="SaloonWindow.startDuel(' + data.player_id + ', ' + data.alliance_id + ', false, DuelsWindow);">' + TWXlang.startduel + '</a></td>',
                '<td><a href="#" onclick="Map.center(' + data.character_x + ', ' + data.character_y + ');">' + TWXlang.centerMap + '</a></td>');
              $('#TWXDuellMapTable').append(content);
              content = $('<div style="position:absolute;border:1px solid black;background:#FF0000;width:4px;height:4px;left:' + (data.character_x / 46592 * 770 - 2) + 'px;top:' + (data.character_y / 20480 * 338 - 2) + 'px;" />');
              eval('content.click(function () { SaloonWindow.startDuel(' + data.player_id + ', ' + data.alliance_id + ', false, DuelsWindow); });');
              content.addMousePopup('<b>' + data.player_name + '</b> ' + window.Map.calcWayTime(Map.getLastQueuePosition(), {
                  x: data.character_x,
                  y: data.character_y
                }).formatDuration());
              $('#TWXDuellMapPlayers').append(content);
            }
            $('<div style="position:absolute;border:1px solid black;background:#00CCFF;width:4px;height:4px;left:' + (Character.position.x / 46592 * 770 - 2) + 'px;top:' + (Character.position.y / 20480 * 338 - 2) + 'px;" />').addMousePopup('Deine Position').appendTo('#TWXDuellMapPlayers');
          };
          var getPlayer = function (i, distance) {
            if (i == -1) {
              progB.setValue(0);
              TWX.DuellMap.Player = {};
              i++;
            }
            Ajax.remoteCall('duel', 'search_op', {
              next: true,
              order_by: 'ASC',
              sort: 'range',
              page: i,
              distance: distance * 60
            }, function (json) {
              var l = json.oplist.pclist.length;
              for (var j = 0; j < l; j++) {
                var plyr = json.oplist.pclist[j].player_name;
                if (!TWX.DuellMap.Player[plyr]) {
                  TWX.DuellMap.Player[plyr] = json.oplist.pclist[j];
                  progB.increase(1);
                }
              }
              if (json.oplist.next && i < 40) {
                getPlayer(++i, distance);
                return;
              }
              TWX.DuellMap.progBVal = progB.getValue();
              fillPage();
            });
          };
          var showTab = function (win, id) {
            DuelsWindow.window.setSize(840, 655).addClass('premium-buy');
            DuelsWindow.window.activateTab(id).$('div.tw2gui_window_content_pane > *').each(function (i, e) {
              if ($(e).hasClass('duels-' + id)) {
                $(e).children().fadeIn();
                $(e).show();
              } else {
                $(e).children().fadeOut();
                $(e).hide();
              }
            });
            DuelsWindow.window.setTitle(TWXlang.duelmap);
            if (Object.keys(TWX.DuellMap.Player).length === 0) {
              TWX.DuellMap.progBVal = 0;
              getPlayer(-1, 15);
            } else
              progB.setValue(TWX.DuellMap.progBVal);
          };
          var initDuellmap = function () {
            DuelsWindow.window.addTab(TWXlang.duelmap, 'TWXDuellmap', showTab);
            TWX.DuellMap.Player = {};
            var area = $('<div class="duels-TWXDuellmap" style="display:none;"></div>').appendTo(DuelsWindow.window.getContentPane()),
            content = $('<div style="height:350px;top:10px;position:relative"></div>'),
            left = 0,
            top = 0;
            for (var i = 1; i <= 15; i++) {
              var img = $('<img style="position:absolute;border:1px solid #000;width:110px;height:169px;left:' + left + 'px;top:' + top + 'px;" src="images/map/minimap/county_' + i + '.jpg" />');
              left += 110;
              if (i === 7) {
                left = 0;
                top = 169;
              }
              if (i === 4 || i === 11) {
                img.css('height', '114px');
              }
              if (i === 11) {
                img.css('top', top + 55 + 'px');
              }
              if (i === 15) {
                img.css({
                  height: '110px',
                  left: '330px',
                  top: '114px'
                });
              }
              content.append(img);
            }
            content.append('<div id="TWXDuellMapPlayers"></div>');
            content.appendTo(area);
            area.append(progB.getMainDiv());
            var scrollpane = new west.gui.Scrollpane().appendTo(area);
            $(scrollpane.getMainDiv()).css('height', '185px');
            scrollpane.appendContent(TWXlang.duelradius + '    ');
            var combobox = new west.gui.Combobox().setWidth(120).addItem('15', '15 ' + TWXlang.minutes).addItem('30', '30 ' + TWXlang.minutes).addItem('60', TWXlang.hour).addItem('120', '2 ' + TWXlang.hours).addItem('240', '4 ' + TWXlang.hours).addItem('360', '6 ' + TWXlang.hours).select('15').appendTo(scrollpane.getContentPane());
            new west.gui.Button(TWXlang.searchOpp).appendTo(scrollpane.getContentPane()).click(function () {
              getPlayer(-1, combobox.getValue());
            });
            scrollpane.appendContent('<table border="1" id="TWXDuellMapTable"></table>');
          };
          DuelsWindow.twlt_open = DuelsWindow.open;
          DuelsWindow.open = function () {
            var tmp = DuelsWindow.twlt_open.call(this);
            if (tmp !== undefined)
              return tmp;
            initDuellmap();
          };
          DuelsWindow.twlt_showTab = DuelsWindow.showTab;
          DuelsWindow.showTab = function (id) {
            var tmp = DuelsWindow.twlt_showTab.call(this, id);
            if (tmp !== undefined)
              return tmp;
            DuelsWindow.window.removeClass('premium-buy').setSize(748, 472);
          };
        }
      };
      TWX.ChangeCity = {
        init: function () {
          var swap = function (that) {
            var rows = $('.' + that.window.id + ' .row .cell.cell_2.name,.' + that.window.id + ' .row .cell.cell_2.name_foreign');
            rows.empty();
            for (var i = 0; i <= that.data.length; i++) {
              var player = that.data[i];
              $(rows[i]).append('<span>&nbsp;' + (player.title !== undefined ? player.title : '') + '</span><a href="#" onClick="PlayerProfileWindow.open(' + player.player_id + ')">' + player.name + '</a>');
            }
          };
          CityhallWindow.Residents.twlt_fillContent = CityhallWindow.Residents.fillContent;
          CityhallWindow.Residents.fillContent = function () {
            var tmp = CityhallWindow.Residents.twlt_fillContent.call(this);
            if (tmp !== undefined)
              return tmp;
            swap(this);
          };
        }
      };
      TWX.ShowAP = {
        init: function () {
          var addAP = function (that) {
            var job = that.job;
            var getJobFeaturedCls = function () {
              if (LinearQuestHandler.hasTutorialQuest())
                return '';
              if (job.is_gold)
                return 'gold';
              if (job.is_silver)
                return 'silver';
              return '';
            };
            var aps = that.currSkillpoints - that.job.workpoints;
            var jobicon = '<div class="job" title="' + job.get('description').escapeHTML().cutIt(150) + '"><div class="featured ' + getJobFeaturedCls() + '"></div>' + '<img src="images/jobs/' + job.get('shortname') + '.png" class="job_icon" /></div>';
            that.window.setTitle(jobicon + '&nbsp;&nbsp;' + job.get('name').escapeHTML() + ' (' + aps + ' AP)');
          };
          JobWindow.twlt_initView = JobWindow.initView;
          JobWindow.initView = function () {
            var tmp = JobWindow.twlt_initView.call(this);
            if (tmp !== undefined)
              return tmp;
            addAP(this);
          };
        }
      };
      TWX.Statusbar = {
        init: function () {
          $('div#ui_windowbar').hide();
          $('div#ui_windowbar_state').hide();
        }
      };
      TWX.Logout = {
        init: function () {
          var menu = $('<div class="menulink" onclick="TWX.Logout.logout();" title="' + TWXlang.logout + '" />').css('background-image', 'url(' + TWXstart.Images('logout') + ')').css('background-position', '0px 0px').mouseenter(function () {
              $(this).css('background-position', '-25px 0px');
            }).mouseleave(function () {
              $(this).css('background-position', '0px 0px');
            });
          $('#TWX-menu').after(menu);
        },
        logout: function () {
          location.href = 'game.php?window=logout&action=logout&h=' + Player.h;
        },
      };
      TWX.MoveJobs = {
        init: function () {
          var st = $('.menulink.lscript')[0].title;
          $('div#ui_bottomright').css('right', '35px');
          $('div.ui_menucontainer').css('margin-bottom', '7px');
          $('div#ui_scripts').remove();
          EscapeWindow.twlt_open = EscapeWindow.twlt_open || EscapeWindow.open;
          EscapeWindow.open = function () {
            EscapeWindow.twlt_open.apply(this, arguments);
            wman.getById('escape').setSize(240, 326);
            $('div.tw2gui_win2.escape div.content div.tw2gui_button')[3].after(new west.gui.Button(st, function () {
                TheWestApi.open();
                wman.getById('escape').destroy();
              }).setMinWidth(175).getMainDiv());
          };
        }
      };
      TWX.BlinkEvents = {
        init: function () {
          var setVal7 = setInterval(function () {
              if ($('.border.highlight').length) {
                clearInterval(setVal7);
                $('.border.highlight').remove();
                TWX.addStyle('.border.highlight {display:none;}');
              }
            }, 3000);
        }
      };
      TWX.FortTracker = {
        init: function () {
          TWX.addStyle('.fort_battle_notification {display:none!important;}');
        }
      };
      TWX.FriendsPop = {
        init: function () {
          west.notification.ToastOnlineNotification.prototype.show = function () {};
        }
      };
      TWX.InstantQuest = {
        init: function () {
          var setVal1 = setInterval(function () {
              if (QuestEmployerView.showQuest) {
                clearInterval(setVal1);
                QuestEmployerView.twlt_showQuest = QuestEmployerView.showQuest;
                QuestEmployerView.showQuest = function (e) {
                  QuestEmployerView.twlt_showQuest(e);
                  if (e.accepted === false) {
                    var req = e.requirements,
                    solvCnt = 0;
                    for (var f = 0; f < req.length; f++)
                      if (req[f].solved === true)
                        solvCnt += 1;
                    if (req.length == solvCnt)
                      $('div.quest_button_area_' + e.id + '').empty().append(new west.gui.Button(TWXlang.accNfin, function () {
                          QuestWindow.acceptQuest(e.id);
                          var siVal = setInterval(function () {
                              if (QuestLog.quests[e.id]) {
                                clearInterval(siVal);
                                QuestWindow.finishQuest(e.id);
                              }
                            }, 200);
                        }).getMainDiv());
                  }
                };
              }
            }, 2000);
        }
      };
      TWX.QuestWiki = {
        init: function () {
          $.getScript(TWXstart.url + 'repGroups.js', function () {
            QuestLog.solvedGroups = {};
            Ajax.remoteCallMode('building_quest', 'get_solved_groups', {}, function (json) {
              for (var sg in json.solved)
                QuestLog.solvedGroups[sg] = json.solved[sg].title;
              QuestLog.twlt_addSolvedQuestGroup = QuestLog.addSolvedQuestGroup;
              QuestLog.addSolvedQuestGroup = function (groupId, questGroup) {
                QuestLog.twlt_addSolvedQuestGroup.apply(this, arguments);
                QuestLog.solvedGroups[groupId] = questGroup.title;
              };
              var lang = Game.locale.substr(0, 2),
              repText = {
                de: ' (Wiederholbare Feiertagsquestreihe)',
                hu: ' (Ismételhető)',
                it: ' (Ripetibile)',
                pt: ' repetível',
                ru: ' - Снова праздник',
              };
              Quest.twlt_render = Quest.render;
              Quest.render = function () {
                Quest.twlt_render.apply(this, arguments);
                var wiki = 'https://wiki.the' + Game.masterURL.match(/the(.*)/)[1] + '/wiki/',
                gid = TWX.repGroups[this.id],
                qGroup = QuestLog.solvedGroups[gid] || lang == 'de' && isNaN(gid) && gid,
                groupName = [69, 34].includes(this.group) && qGroup ? qGroup + repText[lang] || '' : this.groupTitle,
                questName = encodeURIComponent((lang == 'pl' ? 'Zadania: ' : '') + groupName + '#' + (lang == 'de' ? this.id : this.soloTitle));
                this.el.find('.quest_description_container .strong').append('<a class="questWiki" style="float:right;" title="' + TWXlang.onWiki + '" href="' + wiki + questName + '" target="_blank"><img src="' + TWXstart.Images('wiki') + '"/></a>');
              };
            });
          });
        }
      };
      TWX.CityTravel = {
        init: function () {
          var setVal3 = setInterval(function () {
              if (west.window.Blackboard.cities.show) {
                clearInterval(setVal3);
                var wwBc = west.window.Blackboard.cities;
                wwBc.twlt_show = wwBc.show;
                wwBc.show = function () {
                  for (var c = 0; c < this.cities_.length; c++)
                    this.cities_[c].member += '<br>' +
                    Map.calcWayTime(Map.getLastQueuePosition(), {
                      x: this.cities_[c].x,
                      y: this.cities_[c].y
                    }).formatDuration();
                  wwBc.twlt_show.apply(this, arguments);
                  $('.cities .city.inlineblock .popup-title').css('margin-top', '-10px');
                };
              }
            }, 2000);
        }
      };
      TWX.BetterSheriff = {
        onlyAttackable: false,
        init: function () {
          var columns = [
            'name" style="width:100px;',
            'distance" style="width:70px;',
            'amount" style="width:70px;',
            'not_dead_amount" style="width:70px;',
            'duellevel" style="width:50px;',
            'status" style="width:192px;'
          ], //max 552px
          wanted = [
            'Gesucht', 'Wanted', 'Poszukiwany', 'Gezocht', 'Efterlyst', 'Căutat', 'Procurado', 'Hledán', 'Buscado', 'В розыске', 'Aranıyor', 'Körözött', 'Καταζητείται', 'Eftersøgt', 'Odmena za ulovenie', 'Recherché', 'Ricercato',
          ],
          sortByObj,
          myPos,
          lvl,
          players,
          loadedIDs,
          counter,
          maxCount,
          updateTable = function (data) {
            TWX.BetterSheriff.table.clearBody();
            var tmpCells = {};
            for (var i = 0; i < data.length; i++) {
              var rd = data[i];
              if (TWX.BetterSheriff.onlyAttackable && !rd.status.includes('.startDuel'))
                continue;
              tmpCells[columns[0]] = '<a title="' + SheriffWindow.createWantedTooltip(rd).escapeHTML() + '" href="javascript:void(PlayerProfileWindow.open(' + rd.player_id + '));"> ' + rd.name + '</a>';
              tmpCells[columns[1]] = rd.distance.formatDuration();
              tmpCells[columns[2]] = format_number(rd.amount);
              tmpCells[columns[3]] = format_number(rd.not_dead_amount);
              tmpCells[columns[4]] = rd.duellevel;
              tmpCells[columns[5]] = '<span title=\'' + rd.status + '\'>' + rd.status + '</span>';
              TWX.BetterSheriff.table.buildRow('" style="padding-left:5px;', tmpCells);
            }
          },
          startSortDispatcher = function (ev) {
            var sortBy = ev && (ev.target.tagName == 'SPAN' && ev.target.parentElement.classList[2] || ev.target.classList[2]) || 'distance';
            if (sortByObj == sortBy)
              players.reverse();
            else {
              sortByObj = sortBy;
              switch (sortBy) {
              case 'name':
              case 'status':
                players.sort(function (a, b) {
                  return a[sortBy].toUpperCase().replace(/^Ä/, 'A').replace(/^Ö/, 'O').replace(/^Ü/, 'U').replace(/^É/, 'E').replace(/\(.*?\)/, '') > b[sortBy].toUpperCase().replace(/^Ä/, 'A').replace(/^Ö/, 'O').replace(/^Ü/, 'U').replace(/^É/, 'E').replace(/\(.*?\)/, '') ? 1 : -1;
                });
                break;
              case 'distance':
                players.sort(function (a, b) {
                  return a[sortBy] - b[sortBy];
                });
                break;
              default:
                players.sort(function (a, b) {
                  return b[sortBy] - a[sortBy];
                });
                break;
              }
            }
            updateTable(players);
          },
          setStatus = function (player, string) {
            if (player) {
              player.status = string;
              players.push(player);
            }
            counter++;
            TWX.BetterSheriff.progB.increase(1);
            if (counter == maxCount) {
              startSortDispatcher();
              $('div.sheriff-TWXSheriff .fancytable .row_head').css('cursor', 'pointer').click(startSortDispatcher);
              $('div.sheriff-TWXSheriff', SheriffWindow.DOM).append(TWX.BetterSheriff.checkB.getMainDiv());
            }
          },
          loadPlayer = function (arr) {
            if (loadedIDs[arr.player_id])
              setStatus(arr, SaloonWindow.playerStat(loadedIDs[arr.player_id]));
            else
              Ajax.remoteCallMode('profile', 'init', {
                playerId: arr.player_id
              }, function (resp) {
                if (resp.error)
                  return new UserMessage(resp.message).show();
                if (!wanted.includes(resp.status))
                  setStatus(arr, resp.status);
                else if (resp.town) {
                  if (resp.town.town_id == Character.homeTown.town_id)
                    setStatus(arr, TWXlang.ownTown);
                  else
                    Ajax.remoteCallMode('building_saloon', 'get_data', {
                      town_id: resp.town.town_id
                    }, function (data) {
                      if (data.error)
                        return new UserMessage(data.msg).show();
                      for (var l = 0; l < data.players.length; l++)
                        loadedIDs[data.players[l].player_id] = data.players[l];
                      setStatus(arr, SaloonWindow.playerStat(loadedIDs[arr.player_id]));
                    });
                } else
                  Ajax.remoteCall('task', 'add', {
                    'tasks': {
                      '0': {
                        'player_id': arr.player_id,
                        'taskType': 'duel'
                      }
                    }
                  }, function (data) {
                    if (data.tasks[0].error)
                      setStatus(arr, data.tasks[0].msg);
                    else {
                      setStatus(arr, SaloonWindow.playerStat({
                          player_id: arr.player_id,
                          holiday_duel: true,
                        }));
                      Ajax.remoteCall('task', 'cancel', {
                        'tasks': {
                          '0': {
                            'queueId': data.tasks[0].task.queue_id,
                            'type': 'duel'
                          }
                        }
                      });
                    }
                  });
              });
          },
          initData = function (pg) {
            Ajax.remoteCall('building_sheriff', 'load_page', {
              page: pg,
            }, function (json) {
              if (json.error) {
                new UserMessage(json.msg).show();
                return null;
              }
              if (pg === 0) {
                maxCount = json.count * 10;
                TWX.BetterSheriff.progB.setMaxValue(maxCount);
              }
              for (var j = 0; j < 10; j++) {
                if (json.result[j]) {
                  var res = json.result[j];
                  res.distance = Map.calcWayTime(myPos, {
                      x: res.x,
                      y: res.y
                    });
                  res.not_dead_amount = res.not_dead_amount || 0;
                  if (lvl.min > res.duellevel)
                    setStatus(res, TWXlang.tooLow);
                  else if (lvl.max < res.duellevel)
                    setStatus(res, TWXlang.tooHigh);
                  else
                    loadPlayer(res);
                } else {
                  setStatus();
                }
              }
              if (pg < json.count - 1)
                initData(++pg);
            });
          },
          tabclick = function (win, id) {
            if (!SheriffWindow.window)
              return;
            SheriffWindow.window.activateTab(id).setTitle('BetterSheriff').$('div.tw2gui_window_content_pane > *', SheriffWindow.DOM).each(function (i, e) {
              if ($(e).hasClass('sheriff-' + id)) {
                $(e).children().fadeIn();
                $(e).show();
              } else {
                $(e).children().fadeOut();
                $(e).hide();
              }
            });
            if (TWX.loadedSheriff)
              return;
            TWX.loadedSheriff = true;
            myPos = Map.getLastQueuePosition();
            lvl = {
              min: Math.ceil(Character.duelLevel / 1.4),
              max: Math.floor(Character.duelLevel * 1.4 - 0.01)
            };
            players = [];
            loadedIDs = {};
            counter = 0;
            sortByObj = '';
            initData(0);
          },
          initBetterSheriff = function () {
            TWX.loadedSheriff = false;
            SheriffWindow.window.addTab('BetterSheriff', 'TWXSheriff', tabclick).appendToContentPane($('<div class="sheriff-TWXSheriff" style="display:none;width:590px;position:relative;left:50px;"/>'));
            TWX.BetterSheriff.table = new west.gui.Table().removeFooter();
            for (var k = 0; k < columns.length; k++)
              TWX.BetterSheriff.table.addColumn(columns[k]).appendToThCell('head', columns[k], TWXlang.sortBy + ' ' + TWXlang[columns[k].split('"')[0]], TWXlang[columns[k].split('"')[0]]);
            TWX.BetterSheriff.progB = new west.gui.Progressbar(0, null);
            $(TWX.BetterSheriff.progB.getMainDiv()).css('width', '587px');
            TWX.BetterSheriff.checkB = new west.gui.Checkbox().setLabel('<img src="/images/window/dailyactivity/tasks_icon.png">').setTooltip(TWXlang.attackable).setCallback(function (state) {
                TWX.BetterSheriff.onlyAttackable = state;
                updateTable(players);
              }).setSelected(TWX.BetterSheriff.onlyAttackable, true);
            $(TWX.BetterSheriff.checkB.getMainDiv()).css({
              'position': 'absolute',
              'top': '35px',
              'right': '-65px'
            });
            $('div.sheriff-TWXSheriff', SheriffWindow.DOM).empty().append(TWX.BetterSheriff.table.getMainDiv()).append(TWX.BetterSheriff.progB.getMainDiv());
            $('div.sheriff-TWXSheriff .fancytable .tw2gui_scrollpane').css('height', '293px');
            Ajax.remoteCallMode('building_saloon', 'get_data', {
              town_id: Character.homeTown.town_id
            }, function (data) {
              if (data.error)
                return new UserMessage(data.msg).show();
              SaloonWindow.self = data.self;
            });
          };
          SheriffWindow.twlt_open = SheriffWindow.open;
          SheriffWindow.open = function (townId, tabId, wanted) {
            SheriffWindow.twlt_open.call(this, townId, tabId, wanted);
            if (townId === Character.homeTown.town_id) {
              initBetterSheriff();
            }
          };
        }
      };
      TWX.ChatProfessions = {
        init: function () {
          Chat.Formatter.twlt_formatContactClient = Chat.Formatter.formatContactClient;
          Chat.Formatter.formatContactClient = function (client, room) {
            var cClient = Chat.Formatter.twlt_formatContactClient.call(this, client, room);
            if (client.professionId > -1)
              $(cClient[0].lastChild).prepend($(Chat.Formatter.getProfessionImage(client.professionId)).css('background-color', '#D5C6A2')[0]);
            return cClient;
          };
        }
      };
      TWX.QuestBookSearch = {
        init: function () {
          QuestWindowView.clearSearch = function () {
            $('.window-quest_solved .employer_description .questlog_entrie').show();
            $('.window-quest_solved .solved_container .tw2gui_scrollpane_clipper_contentpane').empty();
          };
          QuestWindowView.searchQuest = function (txt) {
            if (txt) {
              txt = txt.toLowerCase();
              var questGroup = new QuestGroup('searchResult', {});
              for (var q in QuestLog.solved_group) {
                var Qq = QuestLog.solved_group[q];
                if (Qq.title.toLowerCase().includes(txt))
                  $('#solved_questgroup_' + q).show();
                else
                  $('#solved_questgroup_' + q).hide();
                for (var r in Qq.quests)
                  if (Qq.quests.hasOwnProperty(r)) {
                    var Qr = Qq.quests[r],
                    idMatch = r == txt;
                    if (Qr.toLowerCase().includes(txt) || idMatch)
                      questGroup.el.append($('<div>').prop({
                          id: 'solved_questgroup_quest_' + r,
                          className: 'questlog_entrie finish'
                        }).append($('<a>').attr({
                            href: '#',
                            className: 'shorten',
                            onclick: s('QuestGroupWindow.open(%1, %2);', q, r)
                          }).text((idMatch ? '#ID ' : '') + Qr)));
                  }
              }
              QuestWindowView.showSolvedGroup(questGroup);
            } else
              QuestWindowView.clearSearch();
          };
          QuestWindowView.twlt_renderGroupSolved = QuestWindowView.renderGroupSolved;
          QuestWindowView.renderGroupSolved = function () {
            QuestWindowView.twlt_renderGroupSolved.apply(this, arguments);
            var textF = new west.gui.Textfield('questbook_search').addListener(QuestWindowView.searchQuest),
            iconB = new west.gui.Iconbutton(new west.gui.Icon('search'), function () {
                QuestWindowView.searchQuest(textF.getValue());
              }),
            icon = new west.gui.Icon('abort').getMainDiv().click(function () {
                textF.setValue('');
                QuestWindowView.clearSearch();
              });
            $('.window-quest_solved .employer_description .quest_splitter').after($('<div id=QuestBookSearch>').append(textF.getMainDiv(), iconB.getMainDiv(), icon));
          };
        }
      };
      TWX.MarketRights = {
        init: function () {
          MarketWindow.sellRights = [{
              i: 'town_new',
              t: TWXlang.town
            }, {
              i: 'friends',
              t: TWXlang.alliance
            }, {
              i: 'welt',
              t: TWXlang.worldwide
            }
          ];
          MarketWindow.Sell.twlt_updateTable = MarketWindow.Sell.updateTable;
          MarketWindow.Sell.updateTable = function () {
            MarketWindow.Sell.twlt_updateTable.apply(this, arguments);
            if (Character.homeTown.town_id)
              Ajax.remoteCall('building_market', 'search', {
                visibility: 0
              }, function (json) {
                for (var i = 0; i < json.msg.search_result.length; i++) {
                  var jsr = json.msg.search_result[i];
                  if (jsr.seller_name == Character.name)
                    $('.marketSellsData_' + jsr.market_offer_id + ' .mps_pickup').prepend('<img src="images/icons/' + MarketWindow.sellRights[jsr.sell_rights].i + '.png" title="' + MarketWindow.sellRights[jsr.sell_rights].t + '">');
                }
              });
          };
          MarketWindow.Buy.twlt_updateTable = MarketWindow.Buy.updateTable;
          MarketWindow.Buy.updateTable = function (data) {
            MarketWindow.Buy.twlt_updateTable.call(this, data);
            if (Character.homeTown.town_id)
              for (var i = 0; i < data.length; i++)
                $('#mpb_vendor_' + data[i].market_offer_id).before('<img src="images/icons/' + MarketWindow.sellRights[data[i].sell_rights].i + '.png" title="' + MarketWindow.sellRights[data[i].sell_rights].t + '">');
          };
        }
      };
      TWX.EquipManagerPlus = {
        init: function () {
          var current = {};
          var changeSlot = function (slot) {
            var ws = Wear.slots;
            if (slot == ws.length) {
              $('#equip_manager_list').html(EquipManager.buildEquipList());
              new UserMessage(TWXlang.saveMessage, 'success').show();
            } else if (current[ws[slot]])
              Ajax.remoteCall('inventory', 'carry', {
                item_id: current[ws[slot]].obj.item_id,
                last_inv_id: Bag.getLastInvId()
              }, function () {
                changeSlot(++slot);
              });
            else
              Ajax.remoteCall('inventory', 'uncarry', {
                last_inv_id: Bag.getLastInvId(),
                type: ws[slot]
              }, function () {
                changeSlot(++slot);
              });
          };
          var rename = function (equipId, nr, name) {
            if (name.length < 3)
              return new UserMessage(TWXlang.longerName).show();
            new UserMessage(TWXlang.loading, 'hint').show();
            current = $.extend({}, Wear.wear);
            Ajax.remoteCall('inventory', 'switch_equip', {
              id: equipId,
              last_inv_id: Bag.getLastInvId()
            }, function () {
              Ajax.remoteCall('inventory', 'delete_equip', {
                id: equipId
              }, function () {
                EquipManager.list.splice(nr, 1);
                Ajax.remoteCall('inventory', 'save_equip', {
                  name: name
                }, function (data) {
                  if (data.error)
                    new UserMessage(data.msg).show();
                  else
                    EquipManager.list.unshift(data.data);
                  changeSlot(0);
                });
              });
            });
          };
          EquipManager.renameEquip = function (equipId, nr) {
            var cont = $('<span>');
            var textF = new west.gui.Textfield('equip_rename').maxlength(25).setValue(EquipManager.list[nr].name).getMainDiv();
            cont.append(TWXlang.newName + ': ', textF, '<p style="margin-top:10px;color:red;">' + TWXlang.renameWarning + '</p>');
            new west.gui.Dialog(TWXlang.rename + ': ' + EquipManager.list[nr].name, cont).addButton('ok', function () {
              rename(equipId, nr, $('#equip_rename').val());
            }).addButton('cancel').show();
          };
          EquipManager.twlt_showPopup = EquipManager.showPopup;
          EquipManager.showPopup = function () {
            EquipManager.twlt_showPopup.apply(this, arguments);
            setTimeout(function () {
              $('#max_equip_count').append(' | ' + TWXlang.used + ': <span id="equip_used">' + EquipManager.list.length);
            }, 100);
          };
          EquipManager.twlt_buildEquipList = EquipManager.buildEquipList;
          EquipManager.buildEquipList = function () {
            if ($('#equip_used').length > 0)
              $('#equip_used')[0].innerHTML = EquipManager.list.length;
            EquipManager.list.sort(function (a, b) {
              var a1 = a.name.toUpperCase(),
              b1 = b.name.toUpperCase();
              return (a1 == b1) ? 0 : (a1 > b1) ? 1 : -1;
            });
            var html = EquipManager.twlt_buildEquipList().replace(/60%/g, '40%').replace(/20%/g, '15%');
            for (var i = 0; EquipManager.list.length > i; i++) {
              var id = EquipManager.list[i].equip_manager_id;
              html = html.replace('deleteEquip(' + id, 'renameEquip(' + id + ',' + i + ');\'>' + TWXlang.rename + '&emsp;</a></td><td width=\'15%\'><a href=\'javascript:EquipManager.deleteEquip(' + id);
            }
            return html;
          };
        }
      };
      TWX.ShortPopups = {
        init: function () {
          ItemPopup.twlt_getXHTML = ItemPopup.twlt_getXHTML || ItemPopup.getXHTML;
          ItemPopup.getXHTML = function () {
            var end = '';
            var html = ItemPopup.twlt_getXHTML.call(this).replace(/<br><span class="inventory_popup_requirement_text(.*?)>$/, function (str) {
                end = str;
                return '';
              }).replace('<div class="invPopup_body">', '').replace('inventory_popup"', 'invPopup_body $& style="max-width:385px;"><table><td').replace(/bonus_attr tw_green"/g, '$& style="white-space:nowrap;"').replace('<br><br><div class="item_set_bonus">', end + '</td><td style="padding-left:5px;">');
            if (!html.includes(end))
              html += end;
            return html;
          };
        }
      };
      TWX.HideNotis = {
        init: function () {
          var setVal5 = setInterval(function () {
              var WNw = WestUi.NotiBar.work;
              if (WNw) {
                clearInterval(setVal5);
                WNw.setMaxSize(999);
                $('<div class="tw2gui_window_buttons_close" style="position:absolute;left:40px;z-index:2;" title="' + TWXlang.removeWorkNotis + '" />').prependTo(WNw.element).click(function () {
                  var l = WNw.list.length;
                  while (l--)
                    if (WNw.list[l].tooltip.includes('job/danger.png'))
                      WNw.removeEntry(WNw.list[l]);
                });
              }
            }, 1000);
        }
      };
      TWX.JobProducts = {
        init: function () {
          Map.PopupHandler.twlt_getJobPopup = Map.PopupHandler.twlt_getJobPopup || Map.PopupHandler.getJobPopup;
          Map.PopupHandler.getJobPopup = function (d) {
            var html = Map.PopupHandler.twlt_getJobPopup.apply(this, arguments);
            for (var i in d.yields) {
              var m = ItemManager.get(i);
              html = html.replace('<img src="' + Game.cdnURL + '/images/items/yield/' + m['short'] + '.', '<div class="item"><span class="count" style="display:block;top:29px;left:0px">' + Bag.getItemCount(i) + '</span></div>$&');
            }
            return html;
          };
        }
      };
      TWX.MapDistance = {
        init: function () {
          TWX.addStyle('div.job_way {left:61px;width:170px;}\n .mpb_distance, .wih_distance, .mpo_distance, .mpw_distance, .mps_distance {width:45px;}\n div.tw2gui_window.marketplace div.fancytable .row > div {text-overflow:unset;}');
          Map.twlt_calcWayTime = Map.twlt_calcWayTime || Map.calcWayTime;
          Map.calcWayTime = function () {
            var time = Map.twlt_calcWayTime.apply(this, arguments);
            this.newDist = time / Game.travelSpeed / Character.speed;
            return time;
          };
          Number.prototype.twlt_formatDuration = Number.prototype.twlt_formatDuration || Number.prototype.formatDuration;
          Number.prototype.formatDuration = function () {
            var dist = '';
            if (Map.newDist)
              dist = ' <small>' + (Math.floor(Map.newDist) / 1000).toFixed(3) + 'mi</small>';
            Map.newDist = 0;
            return Number.prototype.twlt_formatDuration.apply(this, arguments) + dist;
          };
          String.prototype.replaceAll = function () {
            return this.replace(/\D/g, '');
          };
        }
      };
      TWX.TraderSell = {
        init: function () {
          var setVal8 = setInterval(function () {
              var wws = west.window.shop;
              if (wws) {
                clearInterval(setVal8);
                TWX.addStyle('.focused_new_item_shop .sellIt, .focused_marketplace .auctIt {filter: grayscale(90%)}\n .focused_tailor .not_sellable::after, .focused_gunsmith .not_sellable::after, .focused_general .not_sellable::after, .focused_marketplace .not_auctionable::after {content:"";position:absolute;width:28px;height:28px;right:0;background:url("images/window/shop/shop_icons_sprite.png")no-repeat -167px 0;} .focused_tailor .not_sellable, .focused_gunsmith .not_sellable, .focused_general .not_sellable, .focused_marketplace .not_auctionable {opacity:0.5}');
                var mt = -1,
                itemsToSell = [null, null],
                attr = ['sellable', 'auctionable'],
                className = ['sellIt', 'auctIt'],
                sellItem = function (item) {
                  if (!item.obj[attr[mt]])
                    return this;
                  var inv_id = item.inv_id;
                  if (!itemsToSell[mt][inv_id]) {
                    itemsToSell[mt][inv_id] = item.count;
                    item.divMain[0].classList.add(className[mt]);
                  } else {
                    delete itemsToSell[mt][inv_id];
                    item.divMain[0].classList.remove(className[mt]);
                  }
                },
                setClickH = function () {
                  Inventory.setClickHandler({
                    callback: mt ? MarketWindow.onInventoryClick : wws.handleInventoryClick,
                    context: mt ? MarketWindow : wws,
                    window: mt ? MarketWindow.window : wws.getWindow()
                  });
                },
                exitSell = function (destroy) {
                  if (mt)
                    MarketWindow.onInventoryClick = MarketWindow.twlt_onInventoryClick || MarketWindow.onInventoryClick;
                  else
                    wws.handleInventoryClick = wws.twlt_handleInventoryClick || wws.handleInventoryClick;
                  $.each(itemsToSell[mt], function (invId) {
                    var bgbi = Bag.getItemIdByInvId(invId);
                    if (!bgbi)
                      return delete itemsToSell[mt][invId];
                    Bag.getItemByItemId(bgbi).divMain[0].classList.remove(className[mt]);
                  });
                  itemsToSell[mt] = null;
                  if (destroy)
                    return;
                  setClickH();
                  $(sellButton[mt]).css('filter', 'grayscale(90%)');
                },
                repItems = [
                  3, 201, 302, 325, 603, 802, 10003, 11003,
                ],
                initSell = function () {
                  if (!itemsToSell[mt]) {
                    if (mt) {
                      MarketWindow.twlt_onInventoryClick = MarketWindow.twlt_onInventoryClick || MarketWindow.onInventoryClick;
                      MarketWindow.onInventoryClick = function (item) {
                        if (this.window.currentActiveTabId != 'sell')
                          return false;
                        sellItem(item);
                        return true;
                      };
                    } else {
                      wws.twlt_handleInventoryClick = wws.twlt_handleInventoryClick || wws.handleInventoryClick;
                      wws.handleInventoryClick = function (item) {
                        sellItem(item);
                        return true;
                      };
                    }
                    setClickH();
                    $(sellButton[mt]).css('filter', 'grayscale(0%)');
                    itemsToSell[mt] = {};
                  } else {
                    if (Object.keys(itemsToSell[mt]).length) {
                      var cont = '<div>',
                      money = 0;
                      $.each(itemsToSell[mt], function (invId, count) {
                        var bgbi = Bag.getItemIdByInvId(invId);
                        if (!bgbi)
                          return delete itemsToSell[mt][invId];
                        var bgo = Bag.getItemByItemId(bgbi).obj,
                        bi = bgo.item_base_id;
                        cont += count + 'x ' + TWX.GUI.getSetOrItem(bi, bgo, true) + (repItems.includes(bi) ? ' (repeatable quest!)' : '') + '<br>';
                        money += bgo.sell_price * count;
                      });
                      cont += '<br><span class="invPopup_sellicon"/> $' + money + '</span></div>';
                      new west.gui.Dialog(TWXlang.sellItems, cont).setDraggable(true).addButton('yes', function () {
                        $.each(itemsToSell[mt], function (inv_id, amount) {
                          if (mt) {
                            var item = Bag.getItemByInvId(inv_id).obj;
                            var params = MarketWindow.Offer.getOfferObject(item.item_id, 0, (item.sell_price || Math.round(item.price / 2)) * amount, amount, 1, 0, 3, '');
                            Ajax.remoteCall('building_market', 'putup', params, function (resp) {
                              if (resp.error)
                                return new UserMessage(resp.msg).show();
                              Character.setMoney(resp.msg.money);
                              Character.setDeposit(resp.msg.deposit);
                              new UserMessage(s('Die Ware wird zum Kauf angeboten, die Gebühr beträgt $ %1', resp.msg.costs), 'success').show();
                            }, MarketWindow);
                          } else
                            wws.requestSell({
                              inv_id: inv_id,
                              count: amount
                            });
                        });
                        itemsToSell[mt] = {};
                        if (mt) {
                          EventHandler.signal('inventory_changed');
                          MarketWindow.Sell.initData();
                        }
                        exitSell();
                      }).addButton('cancel').show();
                    } else
                      exitSell();
                  }
                },
                sellButton = [null, null],
                icon = ['dollar', 'box'],
                addMtButton = function (winmt) {
                  mt = winmt;
                  if (!$('.TWX_' + attr[mt] + '_button').length) {
                    sellButton[mt] = new west.gui.Iconbutton(new west.gui.Icon(icon[mt]), initSell).addClass('TWX_' + attr[mt] + '_button').getMainDiv();
                    $(sellButton[mt]).css({
                      'position': 'absolute',
                      'left': 0,
                      'z-index': 1,
                      'filter': 'grayscale(90%)'
                    });
                    Inventory.DOM.children('.actions').prepend(sellButton[mt]);
                  }
                };
                wws.twlt_openSellInventory = wws.twlt_openSellInventory || wws.openSellInventory;
                wws.openSellInventory = function () {
                  exitSell(true);
                  wws.twlt_openSellInventory.apply(this, arguments);
                  addMtButton(0);
                };
                /*MarketWindow.twlt_open = MarketWindow.twlt_open || MarketWindow.open;
                MarketWindow.open = function () {
                exitSell(true);
                MarketWindow.twlt_open.apply(this, arguments);
                addMtButton(1);
                };*/
                Inventory.twlt_setClickHandler = Inventory.twlt_setClickHandler || Inventory.setClickHandler;
                Inventory.setClickHandler = function (h) {
                  if (sellButton[mt])
                    $(sellButton[mt]).hide();
                  var win = h && h.window.id,
                  winmt = ['new_item_shop', 'marketplace'].indexOf(win);
                  if (winmt > -1) {
                    mt = winmt;
                    h.callback = mt ? MarketWindow.onInventoryClick : wws.handleInventoryClick;
                    if (sellButton[mt])
                      $(sellButton[mt]).show();
                  }
                  Inventory.twlt_setClickHandler.apply(this, arguments);
                };
                Inventory.twlt_undock = Inventory.twlt_undock || Inventory.undock;
                Inventory.undock = function () {
                  if (itemsToSell[mt])
                    exitSell(true);
                  if (sellButton[mt])
                    sellButton[mt].remove();
                  return Inventory.twlt_undock.apply(this, arguments);
                };
                var tIp = tw2widget.InventoryItem.prototype;
                tIp.twlt_initDisplay = tIp.twlt_initDisplay || tIp.initDisplay;
                tIp.initDisplay = function () {
                  this.twlt_initDisplay.apply(this, arguments);
                  if (!this.obj.auctionable)
                    this.addClass('not_auctionable');
                };
                west.window.shop.trackBuyItem = function () {};
              }
            }, 1000);
        }
      };
      TWX.TouchControl = {
        init: function () {
          var fingers = 0,
          wgSbp = west.gui.Scrollbar.prototype;
          wgSbp.twlt_init = wgSbp.twlt_init || wgSbp.init;
          wgSbp.init = function () {
            this.twlt_init.apply(this, arguments);
            var start,
            that = this;
            $(this.divMain).on('touchstart', function (e) {
              start = e.originalEvent.touches[0].clientY;
            }).on('touchmove', function (e) {
              e.stopPropagation();
              e.preventDefault();
              var move = e.originalEvent.changedTouches[0].clientY;
              that.move(move - start);
              start = move;
            });
          };
          var wgSpp = west.gui.Scrollpane.prototype;
          wgSpp.twlt_init = wgSpp.twlt_init || wgSpp.init;
          wgSpp.init = function () {
            this.twlt_init.apply(this, arguments);
            var start,
            coP = this.contentPane,
            clP = this.clipPane,
            vB = this.verticalBar,
            ratio;
            $(this.divMain).on('touchstart', function (e) {
              fingers++;
              start = e.originalEvent.touches[0].clientY;
              ratio = (vB._divPullArea.height() - vB._divPulley.height()) / (clP.height() - coP.height());
            }).on('touchmove', function (e) {
              if (fingers != 1)
                return;
              e.preventDefault();
              var move = e.originalEvent.changedTouches[0].clientY,
              topPos = move - start;
              vB.move(ratio * topPos);
              start = move;
            }).on('touchend', function (e) {
              fingers = 0;
            });
          };
          var start,
          currZoom = 1;
          $('#ui_minimap').on('touchstart', function (e) {
            fingers++;
            start = e.originalEvent.touches[0].clientY;
          }).on('touchmove', function (e) {
            if (fingers != 1)
              return;
            e.preventDefault();
            var move = e.originalEvent.changedTouches[0].clientY,
            cZmb = currZoom + (move - start) / 100;
            if (cZmb >= 0.65 && cZmb <= 5)
              document.getElementById('map').style.zoom = cZmb;
          }).on('touchend', function (e) {
            fingers = 0;
            currZoom = $('#map').css('zoom') * 1;
            Map.resize();
          });
          Map.twlt_getCurrentMid = Map.twlt_getCurrentMid || Map.getCurrentMid;
          Map.getCurrentMid = function () {
            var xy = this.twlt_getCurrentMid.apply(this, arguments);
            return {
              x: xy.x / currZoom,
              y: xy.y / currZoom
            };
          };
          Map.twlt_resize = Map.twlt_resize || Map.resize;
          Map.resize = function () {
            if (!Map.initialized)
              return;
            this.twlt_resize.apply(this, arguments);
            this.width /= currZoom;
            this.height /= currZoom;
          };
          var start2;
          $('#map').on('touchstart', function (e) {
            fingers++;
            var eoEt = e.originalEvent.touches[0];
            start2 = [eoEt.clientX, eoEt.clientY];
          }).on('touchmove', function (e) {
            if (fingers != 1)
              return;
            e.preventDefault();
            var eoEcT = e.originalEvent.changedTouches[0],
            move = [eoEcT.clientX, eoEcT.clientY];
            Map.Drag.scrollby((start2[0] - move[0]) / currZoom, (start2[1] - move[1]) / currZoom);
            start2 = move;
          }).on('touchend', function (e) {
            fingers = 0;
          });
          var wgWp = west.gui.Window.prototype;
          wgWp.twlt_init = wgWp.twlt_init || wgWp.init;
          wgWp.init = function () {
            this.twlt_init.apply(this, arguments);
            var start,
            that = this,
            tdM = that.divMain,
            currPos;
            $('div.tw2gui_inner_window_title', tdM).on('touchstart', function (e) {
              fingers++;
              var eoEt = e.originalEvent.touches[0];
              start = [eoEt.clientX, eoEt.clientY];
              that.bringToTop();
            }).on('touchmove', function (e) {
              if (fingers != 1)
                return;
              e.preventDefault();
              currPos = [tdM.offsetLeft, tdM.offsetTop];
              var eoEcT = e.originalEvent.changedTouches[0],
              move = [eoEcT.clientX, eoEcT.clientY],
              res = [currPos[0] + move[0] - start[0], currPos[1] + move[1] - start[1]];
              if (res[0] > -1) {
                tdM.style.left = res[0] + 'px';
                currPos[0] = res[0];
              }
              if (res[1] > -1) {
                tdM.style.top = res[1] + 'px';
                currPos[1] = res[1];
              }
              start = move;
            }).on('touchend', function (e) {
              fingers = 0;
            });
          };
          TWX.addStyle('img {-webkit-touch-callout:none;}');
          var timer,
          timer2,
          wph = west.popup.handler;
          $(document).on('touchstart', function (e) {
            timer = setTimeout(function () {
                wph.handleMouseMove.call(wph, e);
              }, 500);
            timer2 = setTimeout(function () {
                e.ctrlKey = 1;
                TWX.CalcTwdb.show(e);
              }, 2000);
          }).on('touchend', function (e) {
            clearTimeout(timer);
            clearTimeout(timer2);
          });
        }
      };
      TWX.ColorTchat = {
        init: function () {
          TWX.CT.DATA = new function () {
            this.Setting = {
              saves: {
                'save 1': '999',
                'save 2': '999',
                'save 3': '999',
                'save 4': '999',
                'save 5': '999'
              },
              Default: {
                Format: '%c',
                colorTag: '999'
              },
            };
            this.Load = function () {
              this.Setting = JSON.parse(localStorage.getItem('CT_save')) || this.Setting;
            };
            this.Load();
            this.Save = function () {
              localStorage.setItem('CT_save', JSON.stringify(this.Setting));
            };
          };
          TWX.CT.Tools = new function () {
            this.colorTagInv = function (e) {
              if (e == null || e == undefined)
                return '';
              if (e.length == 3)
                return '';
              var t = '';
              for (var n = 1; n < e.length / 3 - 1; n++) {
                t = e.substring(n * 3, n * 3 + 3) + t;
              }
              return t;
            };
            this.Degrader = function (e) {
              var t;
              if (e.length == 3)
                t = '#' + this.colorrgb(e);
              else {
                t = 'linear-gradient(to right, ';
                for (var n = 0; n < e.length / 3; n++) {
                  t += '#' + this.colorrgb(e.substring(n * 3, n * 3 + 3));
                  if (n !== e.length / 3 - 1)
                    t += ',';
                }
                t += ')';
              }
              return t;
            };
            this.colorrgb = function (e) {
              result = '';
              TransCode = {
                0: '0',
                1: '1',
                2: '3',
                3: '5',
                4: '6',
                5: '8',
                6: 'a',
                7: 'b',
                8: 'd',
                9: 'f'
              };
              for (var t = 0; t < e.length; t++) {
                result += TransCode[e.substring(t, t + 1)];
              }
              return result;
            };
            this.GuiSelectbox = west.gui.Selectbox;
            this.Guicheckbox = west.gui.Checkbox;
            this.Guitextfield = west.gui.Textfield;
            this.Guibutton = west.gui.Button;
            this.Guidialog = west.gui.Dialog;
          };
          TWX.CT.Chat = new function () {
            this.init = function () {
              if (!$('div.chat_room').length)
                return;
              clearInterval(TWX.CT.initInterval);
              this.Draw();
              TWX.CT.initInterval = setInterval(function () {
                  TWX.CT.Chat.OnChanelChange();
                }, 500);
            };
            this.Draw = function () {
              if (isDefined(this.btncolor))
                return;
              var e;
              $('#colorTxtStyle').append('div.btnColor{cursor: pointer;position: absolute;right: 0px; width: 25px;height: 25px;}\n');
              $('#colorTxtStyle').append('div.btnColorBG{background-image: url(data:image/png;base64,' + border + ');background-position: 0px 3px;background-repeat: no-repeat;}\n.btnColorBG:hover{background-position: -25px 3px;}\n');
              $('#colorTxtStyle').append('div.btnColorImg{width: 11px; height: 11px; margin: 8px 0px 0px 5px; position: absolute; border-radius: 5px; background-image: url(data:image/png;base64,' + color + ');}\n');
              $('#colorTxtStyle').append('div.btnColorSmiley{border-top-right-radius: 10px;border-top-left-radius: 10px;border: 1px solid #646464;box-shadow: 0px 0px 1px 1px black;background-image: url(images/interface/wood_texture_dark.jpg);width: 425px;bottom: 18px;left: -400px;height: 208px;\tmargin: 0px 0px 6px 0px; position: absolute;}\n');
              $('#colorTxtStyle').append('div.btnColorOneSmiley{display: inline-block; cursor: pointer; width: 17px; height: 13px; padding: 1px; text-align: center; vertical-align: middle;}\n');
              this.btncolor = $('<div class="btnColor btnColorBG"/>').append($('<div class="btnColorImg btnColorImgTag"/>').click(function () {
                    TWX.CT.Window.show();
                  })).append(e = $('<div class="btnColorSmiley"/>').hide()).mouseout(function () {
                  $('div.btnColorSmiley:last-child', this).hide();
                }).mouseover(function () {
                  $('div.btnColorSmiley:last-child', this).show();
                });
              for (var t in sm) {
                if (sm[t] !== '') {
                  e.append($('<div class="btnColorOneSmiley"/>').data('Tag', t).click(this.addSmToTxt).append(sm[t]));
                }
              }
            };
            this.addSmToTxt = function (e) {
              var inp = $(e.target).parentsUntil($('div.chat_main')).find('input');
              var n = $(e.currentTarget).data('Tag');
              var r = inp[0].selectionStart;
              var i = inp[0].selectionEnd;
              var s = inp.val();
              if (n == '[player][/player]') {
                s = s.substring(0, r) + '[player]' + s.substring(r, i) + '[/player]' + s.substring(i);
              } else if (n == '[item=]') {
                s = s.substring(0, r) + '[item=' + s.substring(r, i) + ']' + s.substring(i);
              } else {
                s = s.substring(0, r) + ' ' + n + s.substring(r);
              }
              inp.val(s);
            };
            this.appliquer_couleur = function (e, t) {
              if (e == '')
                return '';
              if (t == '999' && !TWX.CT.DATA.Setting.Default.Format.startsWith('/111* '))
                return e;
              if (e.toLowerCase().indexOf('[player]') == 0 && e.toLowerCase().indexOf('[/player]') !== -1)
                return e.substring(0, e.toLowerCase().indexOf('[/player]') + 10) + ' ' + this.appliquer_couleur(e.substring(e.toLowerCase().indexOf('[/player]') + 10), t);
              if (e.toLowerCase().indexOf('[report=') == 0 && e.toLowerCase().indexOf('[/report]') !== -1)
                return e.substring(0, e.toLowerCase().indexOf('[/report]') + 10) + ' ' + this.appliquer_couleur(e.substring(e.toLowerCase().indexOf('[/report]') + 10), t);
              if (e.toLowerCase().indexOf('http') == 0)
                if (e.indexOf(' ') !== -1)
                  return e.substring(0, e.indexOf(' ') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(' ') + 1), t);
                else
                  return e;
              if (e.toLowerCase().indexOf('[item=') == 0 && e.indexOf(']') !== -1)
                return e.substring(0, e.indexOf(']') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(']') + 1), t);
              if (e.toLowerCase().indexOf('[marker') == 0 && e.indexOf(']') !== -1)
                return e.substring(0, e.indexOf(']') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(']') + 1), t);
              for (var n in sm) {
                if (e.indexOf(n) == 0)
                  return e.substring(0, n.length) + ' ' + this.appliquer_couleur(e.substring(n.length), t);
              }
              if (t.length == 3)
                return '/' + t + e;
              if (e.charAt(0) == ' ')
                return e.charAt(0) + this.appliquer_couleur(e.substring(1), t.substring(3) + t.substring(0, 3));
              return '/' + t.substring(0, 3) + e.charAt(0) + ' ' + this.appliquer_couleur(e.substring(1), t.substring(3) + t.substring(0, 3));
            };
            this.fCharAt = function (str, idx) {
              str += '';
              var ret = '',
              end = str.length,
              surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
              while ((surrogatePairs.exec(str)) != null) {
                var li = surrogatePairs.lastIndex;
                if (li - 2 < idx)
                  idx++;
                else
                  break;
              }
              if (idx >= end || idx < 0)
                return '';
              ret += str.charAt(idx);
              if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1)))
                ret += str.charAt(idx + 1);
              return ret;
            };
            this.flipString = function (e) {
              if (e.length === 0)
                return '';
              var eO = this.fCharAt(e, 0);
              for (var p in fl)
                if (p == eO)
                  return this.flipString(e.substring(eO.length)) + fl[p];
                else if (fl[p] == eO)
                  return this.flipString(e.substring(eO.length)) + p;
              return this.flipString(e.substring(eO.length)) + eO;
            };
            this.OnPressKeyEnter = function (e) {
              var obj = $.extend({}, $(e.target).data('ColorTchat'));
              var n = $(e.target).val();
              if (n.charAt(0) == '/') {
                if (n.substring(0, 6) == '/tell ') {
                  if (n.indexOf(':') !== -1) {
                    var r = n.substring(6, n.indexOf(':') + 1);
                    n = n.substring(n.indexOf(':') + 1);
                  }
                } else {
                  var i = [
                    '/topic',
                    '/clear',
                    '/logout',
                    '/ignorelist',
                    '/ignore',
                    '/unignore',
                    '/rights',
                    '/color',
                    '/me',
                    '/help',
                    '/?',
                    '/join',
                    '/items',
                    '/items.s',
                    '/items.add',
                  ];
                  for (var s = 0; s < i.length; s++) {
                    if (n.substring(0, i[s].length) == i[s]) {
                      return;
                    }
                  }
                }
              }
              if (/\/flip /.test(n.substring(0, 6))) {
                obj.Format = '%f';
                n = n.substring(6);
              }
              if (/\/[0-9]{3}/.test(n.substring(0, 5))) {
                obj.Format = '%n';
              }
              if (typeof r !== 'undefined')
                obj.Format = '/tell %t:' + obj.Format;
              var cT = function () {
                var te = '',
                co = obj.colorTag;
                if (!co || co.length % 3 !== 0)
                  return '999';
                if (co.length !== 3) {
                  for (var n = 1; n < co.length / 3 - 1; n++)
                    te = co.substring(n * 3, n * 3 + 3) + te;
                  return co + te;
                } else
                  return co;
              }
              (),
              code = /%[C-n]/.exec(obj.Format)[0],
              newN;
              switch (code) {
              case '%c':
                newN = this.appliquer_couleur(n, cT);
                break;
              case '%C':
                newN = this.appliquer_couleur(n, cT).toUpperCase();
                break;
              case '%f':
                var u = this.flipString(n);
                newN = this.appliquer_couleur(u, cT);
                break;
              case '%F':
                var f = this.flipString(n.toUpperCase());
                newN = this.appliquer_couleur(f, cT);
                break;
              default: //%n
                newN = n;
                break;
              }
              $(e.target).val(obj.Format.replace(code, newN));
            };
            this.OnChanelChange = function () {
              if (!$('div.chat_room').length)
                return;
              clearInterval(TWX.CT.initInterval);
              $('div.chat_room').find('.chat_input').each(function (e) {
                if (!$(this).children().is('.btnColor')) {
                  $(this).append(TWX.CT.Chat.btncolor.clone(true));
                  $(this).find('input.message').keypress(function (e) {
                    if (e.keyCode == 13) {
                      TWX.CT.Chat.OnPressKeyEnter(e);
                      document.focusing = undefined;
                    }
                  }).data('ColorTchat', TWX.CT.DATA.Setting.Default);
                  TWX.CT.Chat.Change = true;
                }
              });
              this.ChangeColor();
              TWX.CT.initInterval = setInterval(function () {
                  TWX.CT.Chat.OnChanelChange();
                }, 500);
            };
            this.ChangeColor = function () {
              if (this.Change === false)
                return;
              this.Change = false;
              var e = TWX.CT.DATA.Setting.Default.colorTag;
              if (pos[e])
                $('#colorTxtStyleTmp').text('div.btnColorImgTag{background-position: ' + pos[e] + '; z-index: 6}\n');
              else
                $('#colorTxtStyleTmp').text('div.btnColorImgTag{background: ' + TWX.CT.Tools.Degrader(e) + '}\n');
              $('div.chat_room').each(function (e) {
                $(this).find('input.message').data('ColorTchat', TWX.CT.DATA.Setting.Default);
              });
            };
            var fl = {
              a: 'ɐ',
              A: 'Ɐ',
              b: 'q',
              B: '𐐒',
              c: 'ɔ',
              C: 'Ɔ',
              d: 'p',
              D: 'ᗡ',
              e: 'ǝ',
              E: 'Ǝ',
              f: 'ɟ',
              F: 'Ⅎ',
              g: 'ƃ',
              G: '⅁',
              h: 'ɥ',
              i: 'ᴉ',
              j: 'ɾ',
              J: 'ſ',
              k: 'ʞ',
              K: 'ʞ',
              l: 'ן',
              L: '⅂',
              m: 'ɯ',
              M: 'W',
              n: 'u',
              N: 'N',
              P: 'Ԁ',
              Q: 'Ὁ',
              r: 'ɹ',
              R: 'ᴚ',
              t: 'ʇ',
              T: '⊥',
              U: '∩',
              v: 'ʌ',
              V: 'Ʌ',
              w: 'ʍ',
              y: 'ʎ',
              Y: '⅄',
              1: 'ɩ',
              2: 'ζ',
              3: 'Ɛ',
              4: 'ᔭ',
              5: 'ﻛ',
              6: '9',
              7: 'ㄥ',
              '.': '˙',
              '[': ']',
              '(': ')',
              '{': '}',
              '?': '¿',
              '!': '¡',
              '\'': ',',
              '<': '>',
              '_': '‾',
              ';': '؛',
              '&': '⅋',
              '"': '„',
              '‿': '⁀',
              '⁅': '⁆',
              '∴': '∵',
            },
            sm = {
              ':-)': '',
              ':)': '<img src ="images/chat/emoticons/smile.png">',
              ':-D': '',
              ':D': '<img src ="images/chat/emoticons/grin.png">',
              ':-(': '',
              ':(': '<img src ="images/chat/emoticons/frown.png">',
              ';-)': '',
              ';)': '<img src ="images/chat/emoticons/smirk.png">',
              ':-p': '',
              ':p': '',
              ':-P': '',
              ':P': '<img src ="images/chat/emoticons/tongue.png">',
              '-.-': '<img src ="images/chat/emoticons/nc.png">',
              '^_^': '',
              '^^': '<img src ="images/chat/emoticons/happy.png">',
              'O.o': '',
              'o.O': '',
              'O_o': '',
              'o_O': '<img src ="images/chat/emoticons/oo.png">',
              ':-/': '',
              ':/': '<img src="images/chat/emoticons/sore.png">',
              '=:)': '<img src="images/chat/emoticons/invader.png">',
              '>:(': '<img src="images/chat/emoticons/angry.png">',
              'T_T': '',
              'T.T': '',
              ':\'(': '<img src="images/chat/emoticons/cry.png">',
              ':-o': '',
              ':o': '',
              ':-O': '',
              ':O': '<img src="images/chat/emoticons/ohmy.png">',
              ':-x': '',
              ':x': '',
              ':-X': '',
              ':X': '<img src="images/chat/emoticons/muted.png">',
              ':-|': '',
              ':|': '<img src="images/chat/emoticons/silent.png">',
              '>_<': '',
              '>.<': '<img src="images/chat/emoticons/palm.png">',
              'X_X': '',
              'x_x': '',
              'X.X': '',
              'x.x': '<img src="images/chat/emoticons/xx.png">',
              'el pollo diablo!': '<img src ="images/chat/emoticons/elpollodiablo.png">',
              '!el pollo diablo': '<img src ="images/chat/emoticons/elpollodiablo_mirror.png">',
              'el pollo diablo?!': '<img src ="images/chat/emoticons/elpollodiablo_front.png">',
              'addme!': '<img src="images/chat/emoticons/sheep_rainbow.gif">',
              'addme': '<img src="images/chat/emoticons/sheep.gif">',
              '[player][/player]': '<div style="background-image: url(images/tw2gui/tw2gui_bbcodes.png); background-position:-88px 20px; width: 21px; height: 20px">',
              '[item=]': '<img src="images/forum/icon/cowboy_boots.png" style="background: url(images/tw2gui/tw2gui_bbcodes.png); background-position:-22px 20px; width: 21px; height: 20px">',
            },
            em = [
              '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '🌟', '💫', '💦', '💧', '💤', '💨', '👍', '👎', '👌', '👊', '✌️', '👋', '👉', '👈', '🙌', '🙏', '👏', '💪', '🎩', '👑', '👒', '💼', '👜', '👓', '🌂', '💛', '💙', '💜', '💚', '❤️', '💔', '💗', '💓', '💕', '💘', '💌', '💋', '💍', '💎', '💬', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '☀️', '⛅️', '☁️', '⚡️', '☔️', '❄️', '⛄️', '🌁', '🌈', '🌊', '🎓', '🎃', '🎅', '🎄', '🎁', '🎉', '🎊', '🎈', '📱', '📞', '⏰', '🔒', '🚿', '🚽', '🚬', '💣', '🔫', '🔪', '💰', '✂️', '🎤', '🎧', '🎶', '🎻', '🎺', '🎷', '🎸', '🎮', '🏈', '🏀', '⚽️', '⚾️', '🎾', '🎳', '⛳️', '🏁', '🏆', '🎿', '🏂', '🏊', '🏄', '☕️', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍳', '🍩', '🍦', '🍨', '🍪', '🍫', '🍬', '🍭', '🍎', '🍇', '🍓', '🍌', '🍍', '🍅',
            ],
            EvName = Object.keys(Game.sesData)[0];
            for (var j of em)
              sm[j] = j;
            if (EvName == 'Easter')
              sm['easter!'] = '<div style="background-image: url(images/window/events/easter/easter_sprite.png); background-position:-20px 0px; width: 17px; height: 20px">';
            else if (EvName)
              sm[EvName.toLowerCase() + '!'] = '<img src="images/icons/' + EvName + '.png">';
            var color = 'iVBORw0KGgoAAAANSUhEUgAAAGAAAAAMCAYAAACdrrgZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHpsAACAjgAA+FQAAIITAAB2OwAA9IEAADvkAAAbd5lS/4AAAAbDSURBVHja7JhLaBzZFYa/c6tf1a12Sy3Zssex/GLG8VtOsDMTDCFMCJ10IK9NZhGyCEMgRHgQCLLLLgjvBrwNIZBVCMoL4gweyGJs8DgeO57YHnvkka2XLcmtV6vV1V2tqpNFXbValmyPFtnlwEWl29/96697zj0qtfz0q7v1zpTH8FMPVeVQV5rjr7hozFA9m6Z2MgVA4oZH8kqVBCGqyoh7jD31YVJhDcUQAqohNUkykTjIfu8TUKicvCxsId7fs5ctRTy2JfzqL7cmf0t1S/yXt/C0BxTM7cdVbk5UWPYDqo2QGxMVbpc8KqdTVL+WIcg5BDkH7+tt1M5mEAURZfjBfa48Noz7aUQENGSiluTqlMP4xCjGwCbevw9cBGbtuGjnnhdb54WLCLN2vJQXuGhg1sCs/A/8CFyUSHtTfXP/aS3aQARVEBFuz3ssv54GWUunAPXTLkLITNUhmJxmmhjlaoMgXAFgZr5C2c1SH52g5DkYsy4D54EhhAKGPA55hAIwZD97NiwvBRyTxzF5jDyfF86jDFGnwDJ5KuSpUUA35wXOKwwtQ2Ee8vOQr0IhhCF5gR8DBQfyDuQNL/av6FCNaqHCQr7CYr6GV1DCdfoGiEpVFRFBW8tWlSg1gtokeOrwn3o7fwpW+PHYI+rBCo7j4MQcJObw1sgwQ40Gt+vbaBhnVakIDEQCQAmYAapWFAYss5FfrsHjhWgs1Z7PKwNUgTlg2urP23voel6gGMDAokXHgHF7vQQEMCCb+BFg0fJjQLlpf6MfJRiossg8T5hhjGlGmWcKjyWUsMmbfR0JAiAUIVAlBF7NJUlf9xAjYAREMUZI3qoxNie8MzrOaQ3Z2Z7js4rgh+AHykjVwQVOo7wzOsHEXPMEnWtu/hTwwI4pOyeWWYtziEDFh0cl+Hg8GqMlWPZXT+a5lnI+h293r2R1p+x1GWhYpkW/bvPzGHgEPAQm7VydjX7ESg0DV4EP7fVSs4rXeIFzPjXKzFJikilGmGaEEhOUmcOnjlg+drzbJes4PCjVEISDnUkO5l34YBkagnfGRQH3mof7UZV7NZc3vSegytN4gtlFj0rmNVBlvvwp0/E4VKu8uVzm17VuzkaeehFbjTPAZy19LQekAaW35YF7MRJV/ORCtPmr0ZmFbAoCXc+vADW7S6WWT9KADyTX9AV6faBiG/lkC74N6AAy0NvSC3odW/0PgX/ZTTfATqAdCFnv36eOxxJLzPKUcQQDCBlyNMiTxO0FiMWN4btdOzncmQMR7pkF7kqZIDAMX/kWdz74HiAcc/7Midhf2Lvd8N5Cjp6FOe5Xlzi8u52PHi2CKid62ql7sLS4yN+PHGd/pr6+K+ozPwHRdb9uaNSfO/QFa+TzLX0ZI3asbv7W7Km1sn5V7BSdnDJ5xN7kDToRTfJ7/QY39G3QEASur/yMkDZOJn/HP3fu4MlimSfbt/NGj8tv3/8EgLcLx3nid/CrkTE+PbiXo+VbLET3uYZSJA10ReWCANub1R8xa3GNUItkU7C7fW12d3tU/aFu5GMUSdkSXo02qx9br69wLQHFLNDZgueBLJCwTKt+CMUcsL8lEfvs7UI2+k+QLKbJkqWzuSJLnhRZ4iSafOyLmiNE7ZtQJHYk6OK2/gBMGJWo/YN8d+XbnJLfkNoV44/xA3ylpxtCj0w2ByiBxOnIGoaO7uX18jDOqjUYbCZgl3Ut0TlXt5mAwZYHGES1SCYB+7qitgOQTUImsfp+O9hSXoMkKJJtaTtAMyFxEGWwpdIHk1DssLfO2cmMbT9JNvpRm7BXgW5rf5tdo8/wCoMJUsU2OlGEDO2A4NJGlg4SpFDLm+ax0E3f2zdMBqGSrZX44YE0X8g0+HjWwRUfVxr8e8awK+Hxo9eybFtZIAiaCbgM9KH4pIEdtvqjzfeBPsts5DMpeKU9GpnU83lDH2l8Oqz+DlvSLj6GPm3hFS470JcFvxvYY0d3dAJ8h/X8qh8FfxvQY3mbb1838WNw+tLk/Dy76GYvO+ihg52kyfqCNPnYsClzLOxoHisB7juzHOWv3Ax/smZZhEOx9wAhRClNT9LoOsz1Gx/yi+98CQQu/O0GR7rPkJx7jBhjX16bcQG4hNKPcoa1Y/sucHeT1Fte+wn05bxyAeESKfqhRV835xUuGLiUgX6xvMI1hXf1BX5C6A95uf9IXy6lcPvBbfLP6svPz+7RYyvtHAii5jkSK3MnvkidODcbb3Fv5ZugyiHzD46aP5CK1RDblh56bVSWq5zoiv4R+7gUoy3jsj9ZJgxBVSifuPL/ryJe8FXEfwcAU73isuGF8swAAAAASUVORK5CYII=',
            border = 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHpsAACAjgAA+FQAAIITAAB2OwAA9IEAADvkAAAbd5lS/4AAAAnFSURBVHjazJhLb5xHdoafU1XfrdmkSJOWLGs8tjQzgDTKxAGCBEjCyYIDZBtAy8CL8e/QWkj+RgBvo613TJBoEiABJlZGE3EiS45lXakmu8m+fZeqc7JotkRZciazywG6PzTQXU+dt+qct6rlr3/+UwN4PJgC8IPvbVIWOQ/3B9TzyNmNihiFg+MZ6oTNfsHhqCGaIhiD4XNCscl6LwNgPD3gb//+6w+AAzObA/zNp3/+VsZ/Px6QVHl3vSJG5cnhjF4eONPPeXo4Q1jEYPjstzLC+pkzACyfGJgaF7beoYstk0nNdN7iRShyx389fESMHWWxQVIhAXfuPeAPfnSJ9V5GTArwU+CfgEenx37JOIkPL5ylbRtm9YzhuKFfBYos8O93HtDrl0ixijMD4Is3GX8M/OuSEX59/8l8NOuq4eEjEPDSp8gDuTNmUdEYaZtI7AxMF4lipPQE1YRzFWeAL+894Ic/usTvXfoI/vGby8AXywn/+v6T4WjWbXy2+ysAcu/wziFiGIthFWMxZ8EwzAzBEBH05Dt3vvkVn+z8ZMn4EPjPJSNc2FrhAnDz/te8u1Ywjg0hRloVSu8whNWQQaEQFBQEwUTIi0CZFUid+GrUcvX76y/HBdzyw5IBkAdHHgRQSnGId4Qgi+S8Q8wQJ5g4uqi0XUcTlS4a81ZPM/xpRrh9775sbpxjsSGNnIgzoyo9PnNk3uEEgneIMxRwBiZG5pV+1mBlRZ2t8HgwZTB8BixEXEJu37vvtjbewwmUAj/cKlkpPL3SUxUFeeYpMyP3INFIImQO6nnL4TTwzUQZjjtGkng0mHLwFkbY2jjnBofPWXU5H2ysMZ11eJ/wCAG7JcpNRHYT3CXJFWAnYdcQt21mjFLH+LDhAOinxNbGOeDJa7WwtfGefzF8xkoRuPLBBn/x8Vmy3GEGInLLOW46s11RvRtTulLP251m1lwzddv96Hm36TTriRMRXgyfcXb97BuMYAgh32T17DG0Y1bLgmgOgc/AbjhhzzCSAsrthN3G+Byx65r4ZDV3nDvXJw3nWH6GC1v9xeoar4OyTcowoApQBaOXecz4TMVuJNW9pAlNSkrxtmG3LfjPi2TXWfWfZGXmtszTPj4mz9d5f72vTkBPMZxg2epK4HB/xDQaYAS45bEbHtlTBU2Q1IgGqJASezHajaaxW8djYzgxxm1BL895NJgiiAB8+rOryw5anul5iiqw0gvUbcOknt6a1vMb00m9Nzmec3RUcziaMTyqOZ621E23F01voHari8ZwPGXamFbB6ePRDMG514QCEWeJMi/RoiRpxGE3gb1lJ7GXBW6ogHgQk72kdnPe2ra1xmh8xPn31hAqwAQgqp60dA0JoWuNw8MJz3uOMvc3nZM9OVFW1YiLVSdFiGp0Ke3Vrd6c1nE7RVgJ3kVMc8A5Q1VOJWKGCUicYpNAUyge2fWytBXBWLRHOWmPIot+EWC3q0CbhjL0UAt4AxxKgmQ4Fg/FouItdHjq5LBWd70I4sA5wYuQe4HgIAckkIBVk931pMzapPFwhuBIYuoC4qO9tiJgQlUF+quJWS0gdtdUEHeSzcvEF0mIBy+Ceu7GqVF3SkeHqQPMZGE3nNgEZmg0nJwobSgq/u7CtxY+IQgOW7zcwk0Eo1W92ybVrjWnJupNW0k4UmZq3cvt5RA4miUOp/BovyWIILgrJ9sck8WqCCDO8H4hmnNG5rmSV45eryQnZ5YSJiJiIk5EkppbCjGdJeeDiyuZ4SziLF0JYgSB3EEWjCwIWXB45xEX8C4QJFzxEpw5kCgc1SksmomJOyVxWIAS+1PH+rsOwxAnO4LcRljkI7ZYCeSlzCLgnNtZO7NCIRGr+ie6QsIMw7wXXaiFcw5cJmFlpWJ1rSLAjkdui4Bb1h3CchNgoAhO3E4SRRUkRBc8ToyoTnVZgrx0RhN6ldCTnGSGOK7h9bK4xYQ9QhDBy0nFqKKdXk6q1zKBOrZMJqMTjzoVr1ZVFcF3jiLz9BdmeK1X+cu9ylNVnqrMqMqMPM/wIYD3JJPLdbJrszoymScdNxEzFDEkYaaWXiYymnWIc1hsGNNSlY4isF3m7nqeyeW8EEK+sHNVpWsT8zpdnrZ6fd7adtvUxEkEiwtdTvX2uk0GMJq1zptSp4ZpA+tneqyvrWz3+9X1lV55uSwLihDIs0CeeYrgyYO7XGZyvfK2nUxAcUYGIs4JrtUkdooVnuwPMIN53VLFjC55IglvfILZR6Z6M6ntxqh3m06vNNF2OuUazm/3e47Bi5rzG2vEwwMeNwPi+quW+He/+I0BPN0/cGpoTHA0PHb3HmSs9XPyXD5xwkdmdtPMdhW7K8IVL+z44K95H7bLMmOtnZNUSU3N88GIGMV923RDPZ1Q9Pq0DdTB8/TpFBeNLDfUsZ2SbatBUkFNSTjEEk5hPplzrJ7x0YBx07G+2eP56FuWDpwwXDJjdaNHspr9g5ZJm2g72VZj23tHljnKXKhKT3CJwieq3NN6aE0Zt8q6wmB0cgQ/bYhFr1+vhrqkKBgft8yTkJpI39zCyR14bwQFEyETBRzzZMy9MG4bNK+IGlkNNW+Lotc/Wg31meN5ZP/FmD/6wSVmbcf8oGZWzxjXEcMIYoSTrhgI+CKQYkszc3Qe5m1kLX87I1y9eN4Gw2cMps+pO4+2CQmOqRSoGW0byXEQPFIITgSJxrzrKBplZsa0mbC1vkKvX7G18R7cHr4GuXrxvA6GzzAd8uio49/uPSe1LXleoEBRCE48rRrjtiN1iZAZpSWOjyPDWUurSpugt1Kx9c6bjDCadVUoNvnLP1lcJXVxAGM2mzA4OsbJKiv9Ak01asqLoxmbqxWFg6g1dx4e00yUq9+rWBR294Zao1m3EYpN/mrn1XVVBCbzYw6OJuTlFmUWsNhQNy2Tecs7Gz1EO+qtji+fHDOfKH/4443vZIQ/+8mHfHjxfQC+/urJsoWfvC8q6vH+IZr6zOqOjy+9T55n9Ff6qBnwS56PjNlkTq9f8ezF4WtnAYC3MRZxHnB0KfF8f0jUHlGVrbWSqirpVRXjaUMe7vxWRvj8H37B9+9f5MLW4mJU5h7vHON5ixNBDY7nLRpn+FDx5aOnxGT0QmQ4D0urYBxLXjw+Xhraa5eebzOqfPG7Sd3hRYhqHM8bTFucy/iPLx9RZoLGyDSGlzP+3xhiZojIReBnwKfAv7zpbN8ZJfBj4Je8OpVF4DfArpk9fOWNchH40xPGF78Do1r+wXCKkYBvgH9eMpaJ9IBzwMfAgzevRd8ZHrgAPDwFUWAMvDCz2alElozfB776HRnxW4koMDnNELP/63j/v+N/BgBXi5F3d3nGEQAAAABJRU5ErkJggg==',
            pos = {
              999: '0px 0px',
              308318328338348: '-24px -0px',
              106117128139: '-36px -0px',
              120130140150: '-48px -0px',
              400500600700800: '-60px -0px',
              199299399499599699: '-72px -0px',
              505606607709809: '-84px -0px'
            };
          };
          TWX.CT.Window = new function () {
            var saveB = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAIAAAAv2XlzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH6SURBVHjaVM89a1RRFIXhtffZ9zOYTBKJYaKOiumiqdKKgmBhqUL+hI2VIFjYCZaChb9ABAtJIQbFIoJoQNSMEKLkC+IEZhLnzuTM3DP3nm2hhLjq9RYPRceOn5qeDUWcyw0jjUNjDBsTiEnikADbd13rbF7sbKwetLZkdPLs5Ru34cvv9ZXauNy6OlOrnZ6aOmmC+FN9KxQzd+HMs8Wv71caG6ufl54/EvW+28nyfr/V2hvh4KCb9W2XfP5rN3vwZCGJ5en9+Z7tZu3faZKaIBIiEKlhiqMgikMjwswKAJAgEBEAhskwoCVUBQBUiSGBRGEYCweGhPnE2PD8tdk4DCrDQ1nH2l6/KEsQBABB1StIfu5kr5c3zzcHE9udykhl5txEIPxicfnd8mpeStFzBAgBWcfud2xBYUH8diV7862tWldVKBQgIE3jsdGKVw9AitLvtTvMdGVuulYdJyLVvwQAIBAzrW3ufllrDJxT9VKW5X67e/3SxYd3bjKKvu2B6DCAahSFecn3Hi+8fLWuqjIoCmt7IsxMe812s9li5sO/934oTSar1TQJDqxVVfFenXO+LAGEYZikydFAVeM4BtHADVzuVFWIWFkUVBYuTZMwjvD/xLBqCZCyAZHkWUMa9Q9L7m573Xs9Kv7nJmLmj/XtQeuHd70/AwDj7v01yw6ZhAAAAABJRU5ErkJggg==',
            setB = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAACoUlEQVQ4T42Uy2sTURTGk1Zbq+ILUdyKG5uZSerQkPbeyYAYCZhlggurFUJN5xGUgiBushdBsQguFMGFC7EqLiyiCwWh0IL/QH3tFJcu1CKlft+duTqJieTA4Z7cOfeX755zZlLaarXaYBx2i9OMW63WQDI2ZDBniOCrKcMHo66/nfvKXNfdgkUlMo4Ppsrl8rCGYx2ybXtzZsIbN47W91vCuwLQhimDDQuekeFl5rUpKBQKIxpAMHwTY8IIN4QfmtL/Dv+WhKnY8S/qfGVJGA8nYXTDCU+YIvhhykbVFCHWBEwGz+1jtZ3MV0Y1vZTRGY8V64eh7BGgP+GPTeG/UjARvCkcr+5hjjKCkjXrBssVZ8YB+wJl96BmwZL+EtY1NOWZJb0VpLBkaX1WWS9lCib8j1knzANyC824b4jwIbr7EvFrQ/rXkJauVqsjXHnmv8rQiPem9GzsDVYqla2A3oayu1C8AOgTvY/0CMYNehz/C3P8IoC7jzinDtju3F7Aliw5exqTONABS2uOInfCTOF9yIjwBlT8QrzOeqEJKxFMWToJ45TEcReY9FbNyWAe11vnaKBmi+jmsiUaZ5CiAEkY66cbq14hvgGMc7Ixqq4JZX9hwSKV5SIYrSes7cqEYhyuA3S1TZkMlk1nZjrO6wnjlGCJVLLDrju9C4ffWSK4iQ6ucTQi2CxhtJ6w5FtGY7eGALgEwLw1ee4krngHvpp1GmfjnL5gek9d2RK+BPATavbWEmF9ojS1L37WF4yzrPdVMUulqW3o7sFD5eYwD6kHfcKSbxktnZUNAWUv8vnmjhjWt7IOmHrOL+9T1AxfDu+82o4BXOkEaBgByWtqGKdE76cwtBfgn61ic4y/4yTC9GwlYwXmH/ypWdRYPEulfgMLajrH8hIjewAAAABJRU5ErkJggg==',
            cList = [
              '999',
              'custom',
              '700',
              '321',
              '409',
              '007',
              '031',
              '704',
              '608',
              '308318328338348',
              '106117128139',
              '120130140150',
              '400500600700800',
              '199299399499599699',
              '505606607709809',
              '696595494393292',
              '959949839829819',
              '900911922933944'
            ];
            this.showOn = function () {
              var e,
              i,
              format = TWX.CT.DATA.Setting.Default.Format;
              $((this.w = wman.open('Colorsettings').setTitle(TWXlang.CT.ColorWindowTitle).setMiniTitle(TWX.CT.name).setSize(350, 400)).getContentPane()).css('text-align', 'center').append(i = $('<input type=hidden class="color" id="colorinput" value="66ff00"/>'));
              (this.ColorPicker = new jscolor.color(i[0], {
                    pickerOnfocus: false
                  })).showPicker();
              this.tab1 = $('<div style="display:inline-block;width:290px;height:275px;position:relative;padding:4px12px4px4px;text-align:left"/>').appendTo(this.w.getContentPane()).append($(jscolor.picker.boxB).css({
                    position: 'relative',
                    display: 'inline-block',
                    'background-color': ''
                  })).append($('<div id="colorPanelDIV" style="display:inline-block;width:auto;height:123px;position:relative;margin-left:7px;border:' + this.ColorPicker.pickerBorder + 'px solid;border-color:' + this.ColorPicker.pickerBorderColor + '"/>').append($('<div id="colorWSetbtn" style="width:20px;height:20px;background-image:url(' + setB + ');margin:10px;cursor:pointer;"/>').click(function (e) {
                      TWX.CT.Window.SetPreviewColor(0);
                    })).append($('<div id="colorWLoadbtn" style="width:20px;height:20px;margin:10px;cursor:pointer;"/>').click(function (e) {
                      TWX.CT.Window.selectLoad.show(e);
                    })).append($('<div id="colorWSavebtnBg" style="width:20px;height:20px;background-image:url(' + saveB + ');background-size:100%100%;margin:10px;cursor:pointer;"/>').click(function (e) {
                      TWX.CT.Window.selectSave.show(e);
                    }))).append(e = $('<div id="PreviewDIV" class="chatwindow_background" style="display:inline-block;width:287px;height:60px;position:relative;zIndex:5;margin-top:5px;border:' + this.ColorPicker.pickerInset + 'px solid;border-color:' + this.ColorPicker.pickerInsetColor + ';color:white;background:#1D1C1C;opacity:' + $('.tw2gui_window_inset', '.chat').css('opacity') + '"/>')).append($('<div style="display:inline-block;position:relative;padding:4px;width:45%"/>').append((this.Bold = new TWX.CT.Tools.Guicheckbox(TWXlang.CT.ColorWindowBold).setSelected(/\*.*\*/.test(format))).getMainDiv().click(function () {
                      TWX.CT.Window.updateFormat();
                      TWX.CT.Window.updatePreview();
                    }))).append($('<div style="display:inline-block;position:relative;padding:4px;width:auto"/>').append((this.Caps = new TWX.CT.Tools.Guicheckbox(TWXlang.CT.ColorWindowCaps).setSelected(/%C|%F/.test(format))).getMainDiv().click(function () {
                      TWX.CT.Window.updateFormat();
                      TWX.CT.Window.updatePreview();
                    }))).append($('<div style="display:inline-block;position:relative;padding:4px;width:45%"/>').append((this.Flip = new TWX.CT.Tools.Guicheckbox(TWXlang.CT.ColorWindowFlip).setSelected(/%f|%F/.test(format))).getMainDiv().click(function () {
                      TWX.CT.Window.updateFormat();
                      TWX.CT.Window.updatePreview();
                    }))).append((this.inputFormat = new TWX.CT.Tools.Guitextfield('bdfFormat').setValue(format).setSize(14).setReadonly(true)).getMainDiv());
              $((this.selectLoad = (new TWX.CT.Tools.GuiSelectbox('topleft-left')).setPosition(42, 10).addListener(function (e) {
                    TWX.CT.Window.LoadColor(e);
                    setTimeout(function () {
                      TWX.CT.Window.selectLoad.hide();
                    }, 0);
                  }).setWidth(200).setHeight(300)).elContent).css({
                'overflow-y': 'auto'
              });
              this.selectSave = (new TWX.CT.Tools.GuiSelectbox('topleft-left')).setPosition(42).addListener(function (e) {
                TWX.CT.Window.SaveColor(e);
                setTimeout(function () {
                  TWX.CT.Window.selectSave.hide();
                }, 0);
              }).setWidth(200);
              for (var s = 0; s < cList.length; s++)
                this.selectLoad.addItem(cList[s], $('<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">').append($('<span style="display:inline-block;width:19px;height:19px;"/>').css('background', TWX.CT.Tools.Degrader(cList[s]))).append(TWXlang.CT.ColorLoadListName[s]), TWXlang.CT.ColorLoadListName[s]);
              for (s in TWX.CT.DATA.Setting.saves)
                this.selectLoad.addItem(s, $('<div>').append($('<span style="display:inline-block;width:19px;height:19px;"/>').css('background', TWX.CT.Tools.Degrader(TWX.CT.DATA.Setting.saves[s]))).append(s + (TWX.CT.DATA.Setting.saves[s] == cList[0] ? ' ' + TWXlang.CT.ColorSaveEmpty : '')));
              for (s in TWX.CT.DATA.Setting.saves)
                this.selectSave.addItem(s, $('<div>').append($('<span style="display:inline-block;width:19px;height:19px;"/>').css('background', TWX.CT.Tools.Degrader(TWX.CT.DATA.Setting.saves[s]))).append(s + (TWX.CT.DATA.Setting.saves[s] == cList[0] ? ' ' + TWXlang.CT.ColorSaveEmpty : '')));
              for (s = 1; s < TWXlang.CT.ColorWindowPreviewTxt.length; s++)
                $('<div id="idColorPreview_' + s + '"style="display:inline-block;cursor:pointer" onclick="javascript:TWX.CT.Window.SetPreviewColor(\'' + s + '\');"/>').appendTo(e);
              this.customTF = (new TWX.CT.Tools.Guitextfield).setSize(30);
              this.test = function () {
                TWX.CT.Window.customTest.html(TWXlang.CT.CustomNotReady).css('color', 'red');
                v = TWX.CT.Window.customTF.getValue();
                if (v.length % 3 == 0 && /[0-9]+/.exec(v) == v) {
                  TWX.CT.Window.customTest.html(TWXlang.CT.CustomReady).css('color', 'green');
                  TWX.CT.Window.customPrev.css('background', TWX.CT.Tools.Degrader(v));
                }
              };
              this.customTF.getField()[0].addEventListener('keyup', this.test);
              this.customPrev = $('<div style="float:left;margin-top:5px;width:19px;height:19px;"/>');
              this.customTest = $('<div style="height:12px;width:120px;"/>');
              this.customTF.divMain.append(this.customPrev, this.customTest);
              this.DefaultButton = (new TWX.CT.Tools.Guibutton(TWXlang.CT.ColorWindowToDefaultBtn, function () {
                  TWX.CT.Window.DefaultClick();
                })).appendTo(this.w.getContentPane());
              this.OkButton = (new TWX.CT.Tools.Guibutton(TWXlang.CT.ColorWindowThisTchatBtn, function () {
                  TWX.CT.Window.OkClick();
                })).appendTo(this.w.getContentPane());
              this.LoadColor(TWX.CT.DATA.Setting.Default.colorTag);
            };
            this.show = function () {
              if (window.jscolor)
                return TWX.CT.Window.showOn();
              $.getScript(TWXstart.url + 'jscolor.js', function () {
                TWX.CT.Window.showOn();
              });
            };
            this.OkClick = function () {
              TWX.CT.DATA.Setting.Default = {
                Format: $('#bdfFormat').val(),
                colorTag: this.ColorTag
              };
              TWX.CT.DATA.Save();
              TWX.CT.Chat.Change = true;
              TWX.CT.Chat.ChangeColor();
              new UserMessage(TWXlang.saveMessage, 'success').show();
            };
            this.DefaultClick = function () {
              TWX.CT.DATA.Setting.Default = {
                Format: '%c',
                colorTag: cList[0]
              };
              TWX.CT.DATA.Save();
              TWX.CT.Chat.Change = true;
              TWX.CT.Chat.ChangeColor();
              this.show();
            };
            this.SetPreviewColor = function (e) {
              if (e == 0) {
                this.ColorTag = this.colorwest(this.ColorPicker.toString());
              } else {
                e--;
                if (e > this.ColorTag.length / 3) {
                  this.ColorTag += this.colorwest(this.ColorPicker.toString());
                } else {
                  this.ColorTag = this.ColorTag.substring(0, e * 3) + this.colorwest(this.ColorPicker.toString()) + this.ColorTag.substring(e * 3 + 3);
                }
              }
              this.updatePreview();
            };
            this.updateFormat = function () {
              var e = this.Flip.isSelected() ? '%f' : '%c';
              if (this.Caps.isSelected())
                e = e.toUpperCase();
              if (this.Bold.isSelected())
                e = '/111* ' + e + ' /111*';
              $('#bdfFormat').val(e);
            };
            this.updatePreview = function () {
              var flip = this.Flip.isSelected();
              var e = flip ? '%f' : '%c';
              if (this.Bold.isSelected())
                e = e.bold();
              if (this.Caps.isSelected())
                e = e.toUpperCase();
              var n = this.ColorTag + TWX.CT.Tools.colorTagInv(this.ColorTag);
              var leng = TWXlang.CT.ColorWindowPreviewTxt.length;
              for (var r = 1; r < leng; r++) {
                var i = document.getElementById('idColorPreview_' + r);
                i.style.color = '#' + TWX.CT.Tools.colorrgb(n.substring(0, 3));
                var g = flip ? leng - r : r;
                var s = TWXlang.CT.ColorWindowPreviewTxt.charAt(g);
                if (s == ' ')
                  i.innerHTML = '&nbsp';
                else
                  i.innerHTML = e.replace('%c', s).replace('%C', s.toUpperCase()).replace('%f', TWX.CT.Chat.flipString(s)).replace('%F', TWX.CT.Chat.flipString(s.toUpperCase()));
                n = n.substring(3) + n.substring(0, 3);
              }
              $('#colorWLoadbtn').css('background', TWX.CT.Tools.Degrader(this.ColorTag));
              $('#colorWLoadbtn').attr('title', TWXlang.CT.ColorLoadTitle + this.ColorTag);
            };
            this.SaveColor = function (e) {
              TWX.CT.DATA.Setting.saves[e] = this.ColorTag;
              for (var i in this.selectLoad.items) {
                if (this.selectLoad.items[i].value == e) {
                  $(this.selectLoad.items[i].node[0].firstChild).css('background', TWX.CT.Tools.Degrader(TWX.CT.DATA.Setting.saves[e]));
                  this.selectLoad.items[i].node[0].lastChild.textContent = e + (TWX.CT.DATA.Setting.saves[e] == cList[0] ? ' ' + TWXlang.CT.ColorSaveEmpty : '');
                }
                if (typeof this.selectSave.items[i] !== 'undefined')
                  if (this.selectSave.items[i].value == e) {
                    $(this.selectSave.items[i].node[0].firstChild).css('background', TWX.CT.Tools.Degrader(TWX.CT.DATA.Setting.saves[e]));
                    this.selectSave.items[i].node[0].lastChild.textContent = e + (TWX.CT.DATA.Setting.saves[e] == cList[0] ? ' ' + TWXlang.CT.ColorSaveEmpty : '');
                  }
              }
              this.updateFormat();
              TWX.CT.DATA.Save();
            };
            this.LoadColor = function (e) {
              if (/save/.test(e)) {
                e = TWX.CT.DATA.Setting.saves[e];
              }
              if (e == 'custom') {
                this.customTF.setValue(this.ColorTag);
                this.test();
                (new TWX.CT.Tools.Guidialog(TWXlang.CT.ColorLoadListName[1], this.customTF.getMainDiv(), 'question')).addButton(TWXlang.CT.ColorWindowOkBtn, function () {
                  var e = TWX.CT.Window.customTF.getValue();
                  if (e.length % 3 == 0 && /[0-9]+/.exec(e) == e)
                    TWX.CT.Window.LoadColor(e);
                }).addButton('cancel').show();
                return;
              }
              this.ColorPicker.fromString('#' + TWX.CT.Tools.colorrgb(e.substring(0, 3)));
              this.ColorTag = e;
              this.updateFormat();
              this.updatePreview();
            };
            this.colorwest = function (e) {
              Wr = (parseInt(e.substring(0, 2), 16) / 255 * 9).toFixed();
              Wg = (parseInt(e.substring(2, 4), 16) / 255 * 9).toFixed();
              Wb = (parseInt(e.substring(4), 16) / 255 * 9).toFixed();
              return Wr + Wg + Wb;
            };
          };
          $('head').append($('<style id=\'colorTxtStyle\' />'));
          $('head').append($('<style id=\'colorTxtStyleTmp\' />'));
          $('#colorTxtStyle').append('div.tw2gui_window.chat div.chat_room div.chat_input div.cbg {right: 65px}\n');
          $('#colorTxtStyle').append('div.tw2gui_window.chat div.chat_room div.chat_input a.speak {right: 25px}\n');
          TWX.CT.initInterval = setInterval(function () {
              TWX.CT.Chat.init();
            }, 500);
        }
      };
      TWX.QuickItemsSearch = {
        init: function () {
          TWX.QIS.equImg = 2188;
          TWX.QIS.MenuButton = function (image, title, onclick) {
            var self = this;
            this.isHovered = false;
            this.onClick = onclick;
            var clicked = function (e) {
              if (self.onClick) {
                self.onClick(self, e);
              }
            };
            var repaint = function () {
              var x = !self.isHovered ? 0 : -25;
              self.obj.css('background-position', x + 'px 0px');
            };
            var mouseIn = function () {
              self.isHovered = true;
              repaint();
            };
            var mouseOut = function () {
              self.isHovered = false;
              repaint();
            };
            this.obj = $('<div class=\'menulink\' title=\'' + title + '\' />').css('background-image', 'url(' + image + ')');
            this.obj.hover(mouseIn, mouseOut);
            this.obj.click(clicked);
            $('div#ui_menubar').append($('<div class=\'ui_menucontainer\' />').append(this.obj).append('<div class=\'menucontainer_bottom\' />'));
          };
          TWX.QIS.popup = function (button, e) {
            if (!TWX.QIS.popupMenu) {
              TWX.QIS.popupMenu = new west.gui.Selectbox().setWidth(250);
              TWX.QIS.popupMenu.addListener(TWX.QIS.findSet);
              $.getScript(TWXstart.url + 'QIS_sets.js', function () {
                var qs = TWX.QIS.sets,
                i = qs.length,
                wSets = west.storage.ItemSetManager._setList;
                while (i--) {
                  var si = qs[i],
                  sn = wSets[si.name],
                  ln = TWXlang.QIS[si.name];
                  if (ln)
                    si.name = ln;
                  else if (!sn)
                    qs.splice(i, 1);
                  else if (sn.name)
                    si.name = sn.name;
                }
                qs.sort(function (a, b) {
                  var a1 = replUml(a.name),
                  b1 = replUml(b.name);
                  return (a1 == b1) ? 0 : (a1 > b1) ? 1 :  - 1;
                });
                for (var j = 0; j < qs.length; j++) {
                  var itemimg = qs[j].img || qs[j].itemsk[0],
                  NAME = qs[j].name;
                  TWX.QIS.popupMenu.addItem(j, '<img src="' + ItemManager.getByBaseId(itemimg).image + '" height="20" width="20">' + '<div style="padding-right: 20px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">' + NAME + '</div>', NAME);
                }
                TWX.QIS.popupMenu.show(e);
              });
            } else
              TWX.QIS.popupMenu.show(e);
          };
          TWX.QIS.findSet = function (id) {
            var items = [],
            seti = TWX.QIS.sets[id];
            base = seti.items,
            upgrade = seti.itemsk,
            custom = false;
            if (base)
              for (var f = 0; f < base.length; f++)
                items.push(base[f] * 1000);
            else {
              for (var g = 0; g < upgrade.length; g++)
                for (var h = 0; h <= 5; h++)
                  items.push(upgrade[g] * 1000 + h);
              custom = true;
            }
            var invItems = Bag.getItemsByItemIds(items);
            if (invItems.length > 0) {
              if (!wman.getById(Inventory.uid))
                Inventory.open();
              Wear.open();
              if (custom && seti.img != TWX.QIS.equImg)
                Inventory.showCustomItems(invItems);
              else
                Inventory.showSearchResult(invItems);
            } else
              new UserMessage(TWXlang.QIS.nothingFound, 'hint').show();
          };
          new TWX.QIS.MenuButton('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QoTBiYArTu6FwAADftJREFUWMMl1tmz3mdBwPHv8zy/fXm3s+ecLE3aLG0a0sWQ2jKlRaotSFspm7JUOoIMoxfi6IXjyI0jN3ojDDoOiozgKFzIoBSxA21ppaG1LU1CkyY5Jyc9+3nPu/7e9/2tz+MF/8N3PvMVf/7Jd5jNjTat2Tu49PY1zHBE7Efk3piwivFrKZNS0IiaDLOMbr+HX5UMbE0TC0pDPWyw0xuxut2hnadgKaajGtUkY6Hhc+pEi82NlOn5BVbe3iAfj6g1WiSJJmpqLB906tGIA8ZjTdLro52UshBoryIqLJwgZK/dZ7s3ZG9cIF1JpFwsUzFTcxF/8cQd5thtd/AnX/o6m5VGlIAlKbVBGRtjbLRIsUxFhcRIg6MVuZC4JiBXPSQKoyu0kfiWR1FO2FeDP/3jp9h59XmUF3Dw5nt4/RcX2MkSjICqzHFFDAxIUwvb9am8hDKTWEZQWhlu1kR7FVQJwki0llRU2LaNEjkNN+bOk7ex8uqLqCMLtS/+4H9eZrmb4UUOYeDjC0kQGBpugOdMaNZdahhCz2I6dgktie0J/KDEd2zqUYAQFZawURIsDKPUUOY5jz14kpcvrPK9Z88xkjnKtzCuwDEaR1lkIseyNTXHIa9GxErSqnkYAZ4E6Wp8LwQDRTZBCg+MTZ5VpGnJ7nbCe371MBIE7dGAylF4BkJZYBmNU4FQGcpIhNHowMVyAkxlQCosNI4l8E2JzEZUhSY0HsiKWhNqLZtXLl7g0thBNVsk0md+qk7W7VFsj8iSlEk2phhmKK3Yau9ha49eb8jb631GewU7/Q79vTH5sKC3vctkXNKIHSQJJxo2TTvjyuY6V7ImljN/hMu9qyxNhQzHfea8GBMrkuEA2xGkRU7dCUiSCUrlYLlYjg1jg6DC2DYUJYdmY5Q0GBHj5wJNxXpbsLm5zqFDh3julRXSSY4bBmSjMcNhRZ63QTmE4xThSDoDg+/HoGFmtkWWZqTjEd2kj3F8lJJcX1vHtm0uTyqklsy26txYvoI1teRhWxrbzpgNQzoTTTUcUWs0GQwGuEHEBBs8SV6VuK7AkprpxXmMKVhZvUHoR2hhs9FuM11rMRVltIcps7OzeHsbdCcZnhagBbZUaMtldraO0QJMRX+Q4DgOtThkd2cX18DapW2EkQT1mIYfMkxHZFlGM46wLAdZGexcManeYjY+gjW4eJlpx2Y+CijKMfPhPK4STMqc/TMxWZpitKAWzTHJU8oqQ5QWppgQ1z3cmw4h8hzplHiySSAllRzSasAoLXngnad45uUrSCtj0tlEG0nsB3RurFGWBWWZE4VNkn6H2cZJWlHMJBmyuDgPlaG1sER7ZwvfCUiTCdlwgoo0kZchexkTE3B0/51YgSmIlUKVOc2gREYuZaFJB30ix4ayy77Dd9Hr9jhx8jRL+5dYW7lK9/qb5EUfY9eYCxRJmWHVQ2ZkhrJn2O2M0F6DnWyDRjMkSRXhQkit1sDxXHRZ0eu0aUwtYguboDnF+uoyp+6+h+mZfeysXWHjxjL5cAfyEfOLB9lMV2nONxmnJbbIqTU8KG12t7aR8dwchSyIQw/hxsg0Ya7pc+LgEi4ZtWaLrLfL0ZsP8vDD7+f880/z+Ec+jtagcLGlS6U0eqKRxgZHMh4WNFoN5uIBna3D9EwToSd4VUIkUqrhDna2x0zNwxMa24bJ1hUWZ6c4ecdZfv6//83Zh56gzDLyQZfAViSdbeLQxybDFTmRBVbLA9tQoLGqoIWxbYRMCdw66XjC6tXzRNNNfD9ACEGR9lm+9CrbW9cI6j5lMaaoUgLPRecdHGeWYNqhm45xvSnqQcowTRkNUrqjn9NaPIAdVsTzR0iLjBRFOxkTuyUtP6Y/nDAaCyJGfOebXyN0XbK8Iik1yjioSuMAeZ7iuR6ZNqRFDSlsdNaGPEdWOiWyFaFjY3CIp2NaczVCJ8BgoWyFHVo4ro0uBY9/6g95+ttfZVR0cAIDBhp1TaPmU+UV9bikFtr0Ol06vQEHDt1Of3ePfCwQSRunGBGTUlMFShu6uz30eISrC0SWIdOE93309/nhN/6WWE/wTIZlIBmMMHnBZDDEKsYInTFOurS3t3GEQt17vPHFV99sU1MWylOUuqQqBdpYjNMJRkiKQnPy7gf5yO99gfmlQxw8epqiKLi+eh2DoTU9TW84wPVDZmemyMocx6/j+SGnbznFTmfCC68s03IlpVYkmWZra8BwUJDlkExKhknBrfe8h0ef+iNas0ss3vIOVq6vs725w14nQUuXXmfEJKvYafdAObi+YengYY7fegtWM4wZjDN2xoKy02Xf4hyVMRTFiEZzlrvvu5/3PPIE2sDe1gZvnX+dpcOH+dCTX+Dh33qKZ773bVYvX6A7+iXL19f71KNfvtlOdwNHdjnWcNBSsbtXUe0OKYXGcx1CN0ZbLr/ywAO897EPIqVid2uDS6+9wfzBg3zs83/GaDDg+ae/y9rKdcZhn16nTVFp9joVtajB5iCjMymwxp0hRSWxLQ8TuKxvDzh95zu5/+EPcPy22xkOevzXt/+d18+/xs6NZXSZU2/EzC4scfrMu3j3Ix+i9tuf4covzvPSc8+wevkiw/Uu7f4my9sdHlw9yvrGMsZUZE6A7/uUacZ9D/06x+64k6MnT9Jr73Lu+Z9w7oUXaG9tkhUZQlfcftcZDt5ylPsf/TB+GPDGy+d47aWX2FhdpdPpsN41XLh6mamFGcST9x4w3zy3xpljC5w5825+47EPMj07x9sry3z9K19mc2sNoSEZJFiORFmSqspBC6JajDGS47ef4olP/i4Li/vZ293hG1/+G1575Rw7yYSHb7+V0B/wDz9Z5/4z+zl1+j7e+8hjtKZnePv6NX789H9wffkK7b094shDGIHj+pRVSTIaY9uKwPO55fgpPvDhTzK3b4mtjXW+952vc/Hcz7h0rcOvPXgb6tH33f7FH//fKo8/8pt84jOfY293h7//67/iP//1n/EjDykMji2YX5rHthWeY9GoRcSNBp5rE0U23d1dnnv6u2xurHP3Pffy+MefRCjFCz99kfe/7xgLJ2/mB89d4oMPP87vPPV5Ntc2+dbffZVv/dPXcK0QXSpmG3VsBJblY0sPo11mp+epByGy0vS6Pc49+ywr11Y4e9/9PPL4R8lHAy5evMDZu+7CCsIG026N+ZlpLAWtZsyTn/0cSIOUivEwYXphHlMZ8jwHNLbtIZVCCKjyFNuLkBKKosBSAozhwOIcC0HMgTmXt9cmzDQcjh/fhyUrDhyY4xOf/TSf+uynUcoiyyY0GlMUeY6UEm0qLNtFCIGuKoo8I4hqGGOoqhLXFkgBtxy9mUhJFuaaWKsXVzm8z+P8z76P6K0xsWr4oUUIDLWNKAYopw7KEApNv1REnqTEJStSKHImwqXpC2wnpKoyWnWfl376LMlgwOvLuww3JhzeP8ObL/6Y4fYORkOt0cQA2hgG/QGW62OqEtfzSDJNHLhoXWF0hWVZFNg4SmBZCiUlvu9y7eUfkltDLiy/hhXUbDbaA1JpuHHt+7SrkNmWR5UkdEpFy9UkKbhRiFdO6FYWdatA2w18XyLTEQPjMNfw6XQS6rWAxWlFXrm0pmJ6/YKbDh3ma8/8CDkwyDfWsLyAyHNIiwqlFIKSqszR0iL2XKQjybKKqiiotMZ1XGxXURQaYUAbTRxHHJyNmGtMMWz3sY7MN3AKw0yzydKhKdyNMTNzNUQrJBpWTLUcylJQGUXoaBqJpl53sKwYKEh6gsC4zM1PsTA/w2TUZzjcY3bhZk6eOMW01Wc6NtwUKo7cFmLLiNJk+I5LVmRIqQABxgEqhBRICWUlsJRPWVa4jk1VGSqtf5m0kdhOhdeAs7ceI4ok1nrmEdQjpoKYoB7S6t2gqQT9wjAV2sS2g2uV9EcJoRXjRaAoCZwJvcGEZuhSZBPUuI9lKTrdPlvtPqPJDqN0wqGlKVa6NlagiMKIQTejORVSFiVaFyglEMbguA4IxXCYIKXEdVzGyRCjBI5js7m1i3J8pNBEoc/Vt66zOd3EzQYsLTaxfvTiZa7sdFgbjJhrxaTdPmEtYjROcR2b4SBhaqpFb5DQiMfs7G4TRDGWkKAkCkGv3ycIA3zPQ4qK/TP7eHPlKlprDDsos8mV9pjshRWGgwTLslBKghSURcEkzXGUhefZOGGIrAzjfILQBikUveFbOI5Llmv80KVKMx46eYLO1hbnt9vsjA3Wo+86RL+7y/peCjqj2bLRpDRigRAlketRypTplkLrIQsLMVIYqAq0MhgtWAhCMBXaTJiZmsNYPpO0ZPGAz01Ls9x/4jS5eY3n37xB7EegK0pdkGclldYoaeH7DsnQMN7dxXUs8rzEIBFCYIzE1yVlaRjnI6SUxNMzvHL1DY7ddDOOZxD/9gf3mF1T50v/8kPaY5vDUwFDnVPzPIpBgfZhMhGEVolUkGcGjUQrBzvP0AL8WkBSTNBVRnugqRWaQ4dDHnjobpKLr3L2zAm0d4qv/OM3uZEZ6o6H6w/wdIjOM2yvSZHusZkZFmOP4ajARHWivAQnZ9DW2FMxjbrNymqbum24vJdx6uwiT56aY319FfGXHztjalJyeXubzaRkcX6OzjBjszsiGY0gH9GcmcYXmhoQ2eC4ilrgEjQVngOj1OC35hi3O7QHQ7TZ4733HcGperx+vUmRWNQtuN4ruLG7xb59i4xyw/pOh35Rkg06tDwfuxnRSgRzdYuRmrAQ+lihotZQCMAA0lqi117F3ulz0701qmiK1Rtr/D8jNuvkHjCe6wAAAABJRU5ErkJggg==', 'Quick items search', TWX.QIS.popup);
        },
      };
      TWX.CalcTwdb = {
        show: function (e) {
          if (!e.ctrlKey && !e.altKey)
            return;
          var t = $(e.target).data();
          var tdi = t.itemId || t.itemid || t.setkey;
          if (!tdi)
            return;
          var add;
          if (e.altKey) {
            add = isNaN(tdi) ? 'supravy&set=' : 'item&id=';
            TWX.GUI.open('openFrame', 'https://tw-db.info/?strana=' + add + tdi, [1000, 630]);
            TWX.GUI.makeList();
          } else {
            add = isNaN(tdi) ? 'sets/' : 'item/';
            window.open('https://tw-calc.net/' + add + tdi);
          }
        },
        init: function () {
          $(document).click(function (e) {
            TWX.CalcTwdb.show(e);
          });
          Inventory.clickHandler = function (item_id, e) {
            var item = Bag.getItemByItemId(item_id);
            if (e.shiftKey || e.ctrlKey || e.altKey)
              return;
            if (this.click && this.click.callback.apply(this.click.context, [item]))
              return;
            if (item.obj.action) {
              $.globalEval(item.obj.action);
              return;
            }
            if (wman.getById(Wear.uid)) {
              Wear.carry(item);
              return;
            }
            return;
          };
        }
        (),
      };
      TWX.CollectReminder = function () {
        var setVal4 = setInterval(function () {
            if (window.Bag && Bag.loaded) {
              clearInterval(setVal4);
              var nulls = [];
              for (var y in TWX.cooldown) {
                var cdwn = TWX.Data.cooldown && TWX.Data.cooldown[y] || TWX.cooldown[y];
                var item = Bag.getItemsByBaseItemId(y)[0];
                if (cdwn == 1 && item) {
                  var coold = BuffList.cooldowns[item.obj.item_id] && BuffList.cooldowns[item.obj.item_id].time || item.cooldown;
                  var sec = coold * 1000 - new ServerDate().getTime();
                  if (!(sec > 0))
                    nulls.push(item);
                  else if (!TWX.cooldownTimer[y])
                    TWX.cooldownSetTime(y, [item], sec);
                } else if (cdwn == 0.5 && TWX.cooldownTimer[y]) {
                  clearTimeout(TWX.cooldownTimer[y]);
                  TWX.cooldownTimer[y] = 0;
                }
              }
              if (nulls.length)
                TWX.cooldownSetTime(0, nulls, 0);
            }
          }, 2000);
      };
      TWX.SkipOpen = function () {
        ItemUse.twlt_use = ItemUse.use;
        ItemUse.use = function (itemId) {
          var baseId = itemId / 1000,
          skips = TWX.Data.skipOpen && TWX.Data.skipOpen[baseId] || TWX.skipOpen[baseId];
          if (skips == 1)
            Ajax.remoteCall('itemuse', 'use_item', {
              item_id: itemId,
              lastInvId: Bag.getLastInvId()
            }, function (res) {
              if (res.error)
                return new UserMessage(res.msg).show();
              var m = res.msg.effects[0],
              widget;
              switch (m.type) {
              case 'lottery':
              case 'content':
                var mi = m.items[0],
                cont = {};
                cont[mi.item_id] = mi.count;
                widget = new tw2widget.Item(ItemManager.get(mi.item_id)).setCount(mi.count).getMainDiv();
                $.get('https://tw-calc.net/service/chest-export', {
                  chest: itemId,
                  count: 1,
                  content: cont,
                  version: Game.version
                }, function () {}, 'jsonp');
                if (ItemUse.twdb)
                  ItemUse.twdb(itemId, res);
                break;
              case 'ses':
                widget = ' <img src="images/icons/' + m.event + '.png" title="' + m.name.escapeHTML() + '" /> ' + m.amount;
                break;
              }
              var mess = $('<div>' + TWXlang.skipDone + ':<br></div>').append(widget);
              new UserMessage(mess, 'success').show();
              Bag.updateChanges(res.msg.changes);
              EventHandler.signal('item_used', [itemId]);
            });
          else
            ItemUse.twlt_use.apply(this, arguments);
        };
      };
      (TWX.Updater = function () {
        if (!window.scriptRequest) {
          scriptRequest = true;
          $.getScript(TWX.updateUrl);
        }
        var intVal = setInterval(function () {
            if (window.scriptUp) {
              scriptUp.c('TWX', TWXstart.version, TWX.name, TWX.lang);
              clearInterval(intVal);
            }
          }, 2000);
      })();
      TWX.Skript.init();
    } else if (location.href.includes('?strana=invent&x=')) {
      let lg = TWXstart.langs,
      lang = /lang=([a-z]+)/.exec(document.cookie),
      TWXlang = lang && lg.hasOwnProperty(lang[1]) ? lg[lang[1]] : lg.en,
      done = false,
      i = document.getElementsByClassName('bag_empty'),
      wrld = document.getElementById('char_server').textContent,
      saveCounts = {},
      sameWorld = false,
      hide = function (it) {
        saveCounts = {};
        var sameItem = false;
        for (var j of i) {
          var m = j.children[1].innerHTML.match(/,\d,\d,\d,(\d),\d/),
          auct = m ? m[1] == 1 : true,
          id = j.id.slice(1),
          level = id.slice(-1) > 0;
          if (it)
            sameItem = sameWorld ? it[id] : !it[id];
          if (!auct || level || sameItem)
            j.style.display = 'none';
          else if (it && it[id]) {
            var count = j.firstChild.firstChild;
            if (count.textContent > it[id]) {
              saveCounts[j.id] = count.textContent;
              count.textContent = it[id];
            }
          }
        }
        $('.inputV2')[0].style.display = 'none';
      };
      TWXstart.compInv = function () {
        if (done) {
          done = false;
          for (var h of i) {
            h.style.display = 'inline-block';
            if (saveCounts[h.id])
              h.firstChild.firstChild.textContent = saveCounts[h.id];
          }
          $('.inputV2')[0].style.display = 'inline-block';
        } else {
          done = true;
          var url = prompt(TWXlang.compInv + ': ');
          if (url && url.includes('?strana=invent&x='))
            $.ajax({
              url: url
            }).done(function (data) {
              var regex = /<div id='i(\d+)' class='bag_empty'><span class="pocetx"><span class="pocet_cislox">(\d+)<\/span>/g,
              t,
              items = {},
              world = /id="char_server">(.*?)</.exec(data);
              if (!world) {
                alert('invalid inventory');
                done = false;
              }
              sameWorld = wrld == world[1];
              while (t = regex.exec(data)) {
                var u = sameWorld ? t[1].slice(0, -3) + '000' : t[1];
                items[u] = t[2];
              }
              hide(items);
            }).fail(function () {
              alert(arguments[1] + arguments[2]);
              done = false;
            });
          else {
            sameWorld = false;
            hide();
          }
        }
      };
      $('.inputV2').after('<img src="https://westzz.innogamescdn.com/images/items/yield/pick.png" width="25" style="position:absolute;right:0px;cursor:pointer;" onclick="TWXstart.compInv();"/>');
    } else {
      window.onload = function () {
        let lg = TWXstart.langs,
        TWXlang = lg.hasOwnProperty(location.href.substr(21, 2)) ? lg[location.href.substr(21, 2)] : lg.en;
        Worlds.show = (function () {
          Worlds.twlt_show = Worlds.show;
          return function () {
            Worlds.twlt_show.apply(this, arguments);
            var first = true;
            var plyWrl = Worlds.playerWorlds,
            state = (JSON.parse(localStorage.getItem('TWLTcustom1')) || {}),
            t1 = [],
            t2 = [];
            for (var a in plyWrl) {
              if (plyWrl[a][1] !== null) {
                t1.push(a);
                if (!state[a])
                  state[a] = false;
                else if (state[a] == true)
                  t2.push(a);
              }
            }
            var loginNow = function (t) {
              for (var x = 0; x < t.length; x++) {
                if (first)
                  Auth.login(plyWrl[t[x]]);
                else
                  window.open(location.origin + '#loginWorld' + t[x], '_blank');
                first = false;
              }
            };
            $('#worldsWrapper').append('<div id="loginMore" />');
            $('#loginMore').append('<a id="loginAll" title="' + TWXlang.loginAll2 + '" href="#" >' + TWXlang.loginAll1 + '</a>').append('<a id="custom" title="' + TWXlang.custom2 + '" href="#" >' + TWXlang.custom1 + '</a>').append('<img id="cust1" title="' + TWXlang.edit + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAFOSURBVDhPY6A6KKnL4j60a2Xf1jWz/6PjQ5unbIUqww3WLpr0Hx0/vXXq/9e39/5fPL4VzAdZAlVOGFw6s9t49sQGsAF/f30GGwLiQ6UJA5Dio7tW/X/z6AIYgwxaNKPr7/1rh6ShSnADkJ/banPB/r9z+QDYIBAfRE9oKf7f2Vz8BKoUE+ydEfj/5Orm/88vb/1fVxwHdjZI88p5zc0gevemRWBxqHJUANP86+Wu/9f3TPu/Y1Yh2NbCskQWkPyiOTmiIM0gw8AakAFI88FFVWCbQYasn5iBVeG0SWWeUCYCLKl1B9sG0gwyZFl73P+99d79UGn8AKQZZBtIM8iQ2XXh2J2IDYA0g2x7cGwZ2JDJpf7E2zwnwwxsG0gzyJCuXC/iNYMAsubGFDvSNIMAyEaQFxoiDf93Vgb3QIWJBwtb3NJANoNoqBAJgIEBAEbiFXTTZGcSAAAAAElFTkSuQmCC"/>');
            $('#selectWorldText').css('margin-bottom', '20px');
            $('#loginAll').css({
              'background-image': 'url("' + TWXstart.Images('LT_login') + '")',
              'height': '45px',
              'width': '180px',
              'line-height': '40px',
              'font-weight': 'bold',
              'font-size': '12px',
              'margin-left': '10px',
              'top': '35px',
              'z-index': '1',
              'position': 'absolute',
              'cursor': 'pointer',
            }).mouseenter(function () {
              $(this).css('background-position', '0px -45px');
            }).mouseleave(function () {
              $(this).css('background-position', '0px 0px');
            }).click(function () {
              loginNow(t1);
            });
            $('#custom').css({
              'background-image': 'url("' + TWXstart.Images('LT_loginC') + '")',
              'background-repeat': 'no-repeat',
              'height': '36px',
              'width': '144px',
              'text-align': 'left',
              'padding-left': '15px',
              'line-height': '32px',
              'font-weight': 'bold',
              'font-size': '11px',
              'margin-left': '45px',
              'top': '70px',
              'z-index': '1',
              'position': 'absolute',
              'cursor': 'pointer',
            }).mouseenter(function () {
              $(this).css('background-position', '0px -36px');
            }).mouseleave(function () {
              $(this).css('background-position', '0px 0px');
            }).click(function () {
              loginNow(t2);
            });
            $('#cust1').css({
              'margin-left': '160px',
              'top': '78px',
              'z-index': '2',
              'position': 'absolute',
              'cursor': 'pointer',
            }).click(function () {
              var checkB = {},
              checkD = {};
              $('#loginMore').hide();
              $('#allWorlds').empty();
              $('#allWorlds').css('text-align', 'left');
              for (var k = 0; k < t1.length; k++) {
                checkB[t1[k]] = new west.gui.Checkbox().setLabel(Worlds.data[t1[k]].name).setSelected(state[t1[k]]).appendTo($('#allWorlds'));
                $('#allWorlds').append('<br><div style="height:5px;" />');
              }
              var butB = new west.gui.Button(TWXlang.save, function () {
                  for (var l in checkB) {
                    checkD[l] = checkB[l].isSelected();
                    localStorage.setItem('TWLTcustom1', JSON.stringify(checkD));
                  }
                  new UserMessage(TWXlang.saveMessage, 'success').show();
                });
              butB.appendTo($('#allWorlds'));
            });
          };
        })();
      };
      if (location.hash.includes('loginWorld')) {
        setTimeout(function () {
          $('#loginButton').click();
          var val = setInterval(function () {
              var u = Worlds.playerWorlds;
              if (Object.keys(u).length !== 0) {
                clearInterval(val);
                Auth.login(u[parseFloat(location.hash.replace(/\D/g, ''))]);
              }
            }, 500);
        }, 1000);
      }
    }
  }
});
