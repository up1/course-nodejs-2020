## Step 1 :: Initial project
npx sequelize-cli init

## Step 2 :: Generate models
npx sequelize-cli model:generate --name Product --attributes name:string,price:decimal

## Step 3 :: Database migration
npx sequelize-cli db:migrate

// Undo
npx sequelize-cli db:migrate:undo

// Status
sequelize db:migrate:status

## Step 4 :: Update schema 
npx sequelize-cli migration:generate --name Product --attributes name:string --force

```
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'twitter', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Users',
        'linkedin',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Users',
        'bio',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Users', 'linkedin'),
      queryInterface.removeColumn('Users', 'twitter'),
      queryInterface.removeColumn('Users', 'bio'),
    ]);
  },
};
```

npx sequelize-cli db:migrate

## Step 5 :: Seeding data
npx sequelize-cli seed:generate --name demo-product

npx sequelize-cli db:seed:all