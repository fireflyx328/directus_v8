<?php

namespace Directus\Api\Routes;

use Directus\Application\Application;
use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Directus\Application\Route;
use Directus\Services\ModulesService;

class Modules extends Route
{
    /**
     * @param Application $app
     */
    public function __invoke(Application $app)
    {
        $app->get('', [$this, 'all']);
    }

    public function all(Request $request, Response $response)
    {
        $service = new ModulesService($this->container);
        $responseData = $service->findAll();

        return $this->responseWithData($request, $response, $responseData);
    }
}
