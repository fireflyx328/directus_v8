<?php


use Phinx\Migration\AbstractMigration;

class CreateSystemLanguages extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $table = $this->table('system_languages', ['signed' => false]);

        $table->addColumn('key', 'string', [
            'limit' => 255,
            'null' => false,
            'default' => 'local'
        ]);
        // TODO: Make directus set this value to whatever default is on the server (UTC)
        // In MySQL 5.5 and below doesn't support CURRENT TIMESTAMP on datetime as default
        $table->addColumn('created_on', 'datetime', [
            'null' => false
        ]);

        $table->addColumn('modified_on', 'datetime', [
            'null' => false
        ]);

        $table->create();

        $data = [
            [
                'collection' => 'system_languages',
                'field' => 'key',
                'type' => \Directus\Database\Schema\DataTypes::TYPE_STRING,
                'interface' => 'text-input',
                'options' => json_encode([
                    'trim' => true,
                    'showCharacterCount' => true,
                    'formatValue' => false,
                    'monospace' => false
                ]),
                'locked' => 1,
                'sort' => 1,
                'width' => 'full'
            ],
            [
                'collection' => 'system_languages',
                'field' => 'created_on',
                'type' => \Directus\Database\Schema\DataTypes::TYPE_DATETIME,
                'interface' => 'datetime',
                'options' => json_encode([
                    'iconRight' => 'today'
                ]),
                'locked' => 1,
                'readonly' => 1,
                'sort' => 2,
                'width' => 'half',
                'required' => 1
            ],
            [
                'collection' => 'system_languages',
                'field' => 'modified_on',
                'type' => \Directus\Database\Schema\DataTypes::TYPE_DATETIME,
                'interface' => 'datetime',
                'options' => json_encode([
                    'iconRight' => 'today'
                ]),
                'locked' => 1,
                'readonly' => 1,
                'sort' => 3,
                'width' => 'half',
                'required' => 1
            ]
        ];

        foreach ($data as $value) {
            if (!$this->checkFieldExist($value['collection'], $value['field'])) {
                $fileds = $this->table('directus_fields');
                $fileds->insert($value)->save();
            }
        }
    }

    public function checkFieldExist($collection, $field)
    {
        $checkSql = sprintf('SELECT 1 FROM `directus_fields` WHERE `collection` = "%s" AND `field` = "%s";', $collection, $field);
        return $this->query($checkSql)->fetch();
    }
}
