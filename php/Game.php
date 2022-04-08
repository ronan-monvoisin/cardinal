<?php

class Mysql
{
    /**
     * Connecte à la base de donnée et renvoit l'objet PDO
     *
     * @return PDO
     */
    protected function connectBDD(): PDO
    {
        require './config.php';
        $dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

        try {
            $pdo = new PDO($dsn, $user, $password);

            if ($pdo) {
                return $pdo;
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}
class Game extends Mysql
{
  public $cards = [];
  public $hand = [];
  public $started;
  public $session;

  public function __construct(array $deck)
  {
    shuffle($deck);
    $this->cards = $deck;
    $this->started = date("Y/m/d");
  }

  public function draw()
  {
    $drawed = array_pop($this->cards);
    $this->hand[] = $drawed;
    return $drawed;
  }

  public function dico(string $word)
  {
    $db = parent::connectBDD();
    $pdo =  $db->prepare("SELECT * FROM `dico` WHERE `dico`.`word` = :word;");
    $pdo->bindValue('word', $word);
    try {
      $pdo->execute();
      return $pdo->fetchObject();
    } catch (PDOException $e) {
      var_dump($e);
    }
    $db = null;
    $pdo = null;
  }

}

?>