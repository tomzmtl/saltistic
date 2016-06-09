<?php

namespace App\Abstracts;

use App\Repositories\RepositoryInterface;
use Illuminate\Container\Container;

/**
 * The Abstract Repository provides default implementations of the methods defined
 * in the base repository interface. These simply delegate static function calls
 * to the right eloquent model based on the $modelClassName.
 */
abstract class AbstractRepository implements RepositoryInterface
{

    protected $modelClass;

    public function __construct(Container $app)
    {
       $this->model = $app->make($this->modelClass);
    }

    public function create (array $attributes)
    {
        return $this->model->create($attributes);
    }

    public function all ($columns = array('*'))
    {
        return $this->model->all($columns);
    }

    public function find ($id, $columns = array('*'))
    {
        return $this->model->find($id, $columns);
    }

    public function destroy ($ids)
    {
        return $this->model->destroy($ids);
    }

}
