<<<<<<< HEAD
<?php

try {
    $databaseFile = 'database.db';
    $db = new SQLite3($databaseFile);

    $query = '
        CREATE TABLE IF NOT EXISTS bug (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            yes TEXT CHECK(yes IN (\'yes\', \'no\')) NOT NULL,
            date DATE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )';

    if ($db->exec($query)) {
        echo 'Database and table created successfully.';
    } else {
        echo 'Error creating database or table: ' . $db->lastErrorMsg();
    }

    $db->close();
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}

=======
<?php

try {
    $databaseFile = 'database.db';
    $db = new SQLite3($databaseFile);

    $query = '
        CREATE TABLE IF NOT EXISTS bug (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            yes TEXT CHECK(yes IN (\'yes\', \'no\')) NOT NULL,
            date DATE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )';

    if ($db->exec($query)) {
        echo 'Database and table created successfully.';
    } else {
        echo 'Error creating database or table: ' . $db->lastErrorMsg();
    }

    $db->close();
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}

>>>>>>> 77235a8 (Update)
?>